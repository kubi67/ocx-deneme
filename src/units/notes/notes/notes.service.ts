import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Notes } from 'src/models/notes/notes.entity';

import { Repository } from 'typeorm';
import { NotesDTO } from './notes.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private readonly repo: Repository<Notes>,
  ) {}

  public async getAll(): Promise<NotesDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => NotesDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<NotesDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => NotesDTO.fromEntity(e)));
  }

  public async getByLeadAndOperator(operatorID: string): Promise<NotesDTO[]> {
    return await this.repo
      .find({ where: { model_id: operatorID } })
      .then((datas) => datas.map((e) => NotesDTO.fromEntity(e)));
  }

  public async getMyNotes(userID?: string): Promise<any> {
    if (userID) {
      return await this.repo
        .query(`select notes.id as note_id, notes.author_id, notes.model_id as note_target, notes.created_at as note_created_at,
notes.note,
u.id as author_user_id, u.firstname as author_name, u.lastname as author_lastname
from notes
INNER JOIN public."user" u ON u.id::uuid = notes.author_id::uuid
Where model_id='${userID}'`);
    }
    return new NotFoundError('User ID musnt null!');
  }

  public async getMyLeadNotes(authorID?: string) {
    if (!authorID) {
      return "User ID can't be empty!";
    }
    return await this.repo
      .query(`select notes.id as note_id, notes.author_id, notes.model_id as note_target, notes.created_at as note_created_at,
notes.note,
u.id as author_user_id, u.firstname as author_name, u.lastname as author_lastname
from notes
INNER JOIN public."leads" u ON u.id::uuid = notes.model_id::uuid
Where author_id='${authorID}'::uuid`);
  }

  public async getMyUserNotes(authorID: string) {
    if (!authorID) {
      return "User ID can't be empty!";
    }
    return await this.repo
      .query(`select notes.id as note_id, notes.author_id, notes.model_id as note_target, notes.created_at as note_created_at,
notes.note,
u.id as author_user_id, u.firstname as author_name, u.lastname as author_lastname
from notes
INNER JOIN public."user" u ON u.id::uuid = notes.model_id::uuid
Where author_id='${authorID}'`);
  }

  public async getByIdMany(id: string): Promise<NotesDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => NotesDTO.fromEntity(e)));
  }

  public async getByAuthor(id: string): Promise<NotesDTO[]> {
    return await this.repo
      .find({ where: { author_id: id } })
      .then((datas) => datas.map((e) => NotesDTO.fromEntity(e)));
  }

  public async getByModelType(id: string): Promise<NotesDTO[]> {
    return await this.repo
      .find({ where: { model_type: id } })
      .then((datas) => datas.map((e) => NotesDTO.fromEntity(e)));
  }

  public async getByModel(id: string): Promise<NotesDTO[]> {
    return await this.repo
      .find({ where: { model_id: id } })
      .then((datas) => datas.map((e) => NotesDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<NotesDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => NotesDTO.fromEntity(datas));
  }

  public async create(dto: NotesDTO): Promise<NotesDTO> {
    return await this.repo
      .save(NotesDTO.toEntity(dto))
      .then((e) => NotesDTO.fromEntity(e));
  }

  public async update(id: string, dto: NotesDTO): Promise<NotesDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = NotesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async getAllWithAll(): Promise<any> {
    const data = await this.repo.query(
      `SELECT * FROM public."getLeadsWithAll"`,
    );
    return data;
  }

  public async changeStatus(id: string): Promise<NotesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = NotesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<NotesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = NotesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

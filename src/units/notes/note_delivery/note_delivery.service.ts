import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteDelivery } from 'src/models/notes/note_delivery.entity';

import { Repository } from 'typeorm';
import { NoteDeliveryDTO } from './note_delivery.dto';

@Injectable()
export class NoteDeliveryService {
  constructor(
    @InjectRepository(NoteDelivery)
    private readonly repo: Repository<NoteDelivery>,
  ) {}

  public async getAll(): Promise<NoteDeliveryDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => NoteDeliveryDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<NoteDeliveryDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => NoteDeliveryDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<NoteDeliveryDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => NoteDeliveryDTO.fromEntity(e)));
  }

  public async getByUser(id: string): Promise<NoteDeliveryDTO[]> {
    return await this.repo
      .find({ where: { user_id: id } })
      .then((datas) => datas.map((e) => NoteDeliveryDTO.fromEntity(e)));
  }

  public async getByNote(id: string): Promise<NoteDeliveryDTO[]> {
    return await this.repo
      .find({ where: { note_id: id } })
      .then((datas) => datas.map((e) => NoteDeliveryDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<NoteDeliveryDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => NoteDeliveryDTO.fromEntity(datas));
  }

  public async create(dto: NoteDeliveryDTO): Promise<NoteDeliveryDTO> {
    return await this.repo
      .save(NoteDeliveryDTO.toEntity(dto))
      .then((e) => NoteDeliveryDTO.fromEntity(e));
  }


  public async update(
    id: string,
    dto: NoteDeliveryDTO,
  ): Promise<NoteDeliveryDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = NoteDeliveryDTO.fromEntity(
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

  public async changeStatus(id: string): Promise<NoteDeliveryDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = NoteDeliveryDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<NoteDeliveryDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = NoteDeliveryDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

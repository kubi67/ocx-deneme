import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDocuments } from 'src/models/users/user_documents.entity';
import { Repository } from 'typeorm';
import { UserDocumentDTO } from './user_documents.dto';

@Injectable()
export class UserDocumentService {
  constructor(
    @InjectRepository(UserDocuments)
    private readonly repo: Repository<UserDocuments>,
  ) {}

  public async getAll(): Promise<UserDocumentDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => UserDocumentDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<UserDocumentDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => UserDocumentDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<UserDocumentDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => UserDocumentDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<UserDocumentDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => UserDocumentDTO.fromEntity(datas));
  }

  public async create(dto: UserDocumentDTO): Promise<UserDocumentDTO> {
    return await this.repo
      .save(UserDocumentDTO.toEntity(dto))
      .then((e) => UserDocumentDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: UserDocumentDTO,
  ): Promise<UserDocumentDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = UserDocumentDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<UserDocumentDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserDocumentDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<UserDocumentDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserDocumentDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

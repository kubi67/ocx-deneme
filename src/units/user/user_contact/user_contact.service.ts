import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserContact } from 'src/models/users/user_contact.entity';
import { Repository } from 'typeorm';
import { UserContactDTO } from './user_contact.dto';

@Injectable()
export class UserContactService {
  constructor(
    @InjectRepository(UserContact)
    private readonly repo: Repository<UserContact>,
  ) {}

  public async getAll(): Promise<UserContactDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => UserContactDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<UserContactDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => UserContactDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<UserContactDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => UserContactDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<UserContactDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => UserContactDTO.fromEntity(datas));
  }

  public async create(dto: UserContactDTO): Promise<UserContactDTO> {
    return await this.repo
      .save(UserContactDTO.toEntity(dto))
      .then((e) => UserContactDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: UserContactDTO,
  ): Promise<UserContactDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = UserContactDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<UserContactDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserContactDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<UserContactDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserContactDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

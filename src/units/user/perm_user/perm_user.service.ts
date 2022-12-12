import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPermissions } from 'src/models/users/user_permissions.entity';
import { Repository } from 'typeorm';
import { PermUserDTO } from './perm_user.dto';

@Injectable()
export class PermUserService {
  constructor(
    @InjectRepository(UserPermissions)
    private readonly repo: Repository<UserPermissions>,
  ) {}

  public async getAll(): Promise<PermUserDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PermUserDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<PermUserDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => PermUserDTO.fromEntity(e)));
  }

  public async getByUser(userID: string): Promise<PermUserDTO[]> {
    return await this.repo
      .find({ where: { user_id: userID } })
      .then((datas) => datas.map((e) => PermUserDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<PermUserDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => PermUserDTO.fromEntity(datas));
  }

  public async create(dto: PermUserDTO): Promise<PermUserDTO> {
    return await this.repo
      .save(PermUserDTO.toEntity(dto))
      .then((e) => PermUserDTO.fromEntity(e));
  }

  public async update(id: string, dto: PermUserDTO): Promise<PermUserDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = PermUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<PermUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = PermUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<PermUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = PermUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

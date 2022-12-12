import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRoles } from 'src/models/users/user_roles.entity';
import { Repository } from 'typeorm';
import { RoleUserDTO } from './role_user.dto';

@Injectable()
export class RoleUserService {
  constructor(
    @InjectRepository(UserRoles)
    private readonly repo: Repository<UserRoles>,
  ) {}

  public async getAll(): Promise<RoleUserDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => RoleUserDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<RoleUserDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => RoleUserDTO.fromEntity(e)));
  }

  public async getByUser(userID: string): Promise<RoleUserDTO> {
    return await this.repo
      .findOne({ where: { user_id: userID } })
      .then((datas) => RoleUserDTO.fromEntity(datas));
  }

  public async getById(id: string): Promise<RoleUserDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => RoleUserDTO.fromEntity(datas));
  }

  public async create(dto: RoleUserDTO): Promise<RoleUserDTO> {
    return await this.repo
      .save(RoleUserDTO.toEntity(dto))
      .then((e) => RoleUserDTO.fromEntity(e));
  }

  public async update(id: string, dto: RoleUserDTO): Promise<RoleUserDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = RoleUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<RoleUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = RoleUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<RoleUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = RoleUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

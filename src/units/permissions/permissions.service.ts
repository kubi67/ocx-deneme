import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Repository } from 'typeorm';
import { PermissionDTO } from './permissions.dto';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private readonly repo: Repository<Permission>,
  ) {}

  public async getAll(): Promise<PermissionDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PermissionDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<PermissionDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => PermissionDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<PermissionDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => PermissionDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<PermissionDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => PermissionDTO.fromEntity(datas));
  }

  public async create(dto: PermissionDTO): Promise<PermissionDTO> {
    return await this.repo
      .save(PermissionDTO.toEntity(dto))
      .then((e) => PermissionDTO.fromEntity(e));
  }

  public async update(id: string, dto: PermissionDTO): Promise<PermissionDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = PermissionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<PermissionDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = PermissionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<PermissionDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = PermissionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

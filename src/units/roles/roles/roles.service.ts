import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from 'src/models/rolesNpermissions/roles.entity';
import { Repository } from 'typeorm';
import { RolesDTO } from './roles.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly repo: Repository<Roles>,
  ) {}

  public async getAll(): Promise<RolesDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => RolesDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<RolesDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => RolesDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<RolesDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => RolesDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<RolesDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => RolesDTO.fromEntity(datas));
  }

  public async create(dto: RolesDTO): Promise<RolesDTO> {
    return await this.repo
      .save(RolesDTO.toEntity(dto))
      .then((e) => RolesDTO.fromEntity(e));
  }

  public async update(id: string, dto: RolesDTO): Promise<RolesDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = RolesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<RolesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = RolesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<RolesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = RolesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

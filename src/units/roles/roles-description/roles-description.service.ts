import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesDescription } from 'src/models/rolesNpermissions/roles_description.entity';
import { Repository } from 'typeorm';
import { RolesDescriptionDTO } from './roles-description.dto';

@Injectable()
export class RolesDescriptionService {
  constructor(
    @InjectRepository(RolesDescription)
    private readonly repo: Repository<RolesDescription>,
  ) {}

  public async getAll(): Promise<RolesDescriptionDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => RolesDescriptionDTO.fromEntity(e)));
  }

  public async getByRole(roleID: string): Promise<RolesDescriptionDTO[]> {
    return await this.repo
      .find({ where: { role_id: roleID } })
      .then((datas) => datas.map((e) => RolesDescriptionDTO.fromEntity(e)));
  }

  public async getByRoleOne(roleID: string): Promise<RolesDescriptionDTO> {
    return await this.repo
      .findOne({ where: { role_id: roleID } })
      .then((datas) => RolesDescriptionDTO.fromEntity(datas));
  }


  public async getByLang(languageID: string): Promise<RolesDescriptionDTO[]> {
    return await this.repo
      .find({ where: { language_id: languageID } })
      .then((datas) => datas.map((e) => RolesDescriptionDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<RolesDescriptionDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => RolesDescriptionDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<RolesDescriptionDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => RolesDescriptionDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<RolesDescriptionDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => RolesDescriptionDTO.fromEntity(datas));
  }

  public async create(dto: RolesDescriptionDTO): Promise<RolesDescriptionDTO> {
    return await this.repo
      .save(RolesDescriptionDTO.toEntity(dto))
      .then((e) => RolesDescriptionDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: RolesDescriptionDTO,
  ): Promise<RolesDescriptionDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = RolesDescriptionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<RolesDescriptionDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = RolesDescriptionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<RolesDescriptionDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = RolesDescriptionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

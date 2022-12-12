import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Settings } from 'src/models/settings/settings.entity';
import { Repository } from 'typeorm';
import { SettingsDTO } from './settings.dto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Settings)
    private readonly repo: Repository<Settings>,
  ) {}

  public async getAll(): Promise<SettingsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => SettingsDTO.fromEntity(e)));
  }

  public async getByModelID(modelID: string): Promise<SettingsDTO[]> {
    return await this.repo
      .find({ where: { model_id: modelID } })
      .then((datas) => datas.map((e) => SettingsDTO.fromEntity(e)));
  }

  public async getByModelName(modelName: string): Promise<SettingsDTO[]> {
    return await this.repo
      .find({ where: { model_id: modelName } })
      .then((datas) => datas.map((e) => SettingsDTO.fromEntity(e)));
  }

  public async getByCreatedBy(createdBy: string): Promise<SettingsDTO[]> {
    return await this.repo
      .find({ where: { created_by: createdBy } })
      .then((datas) => datas.map((e) => SettingsDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<SettingsDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => SettingsDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<SettingsDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => SettingsDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<SettingsDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => SettingsDTO.fromEntity(datas));
  }

  public async create(dto: SettingsDTO): Promise<SettingsDTO> {
    return await this.repo
      .save(SettingsDTO.toEntity(dto))
      .then((e) => SettingsDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: SettingsDTO,
  ): Promise<SettingsDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = SettingsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<SettingsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = SettingsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<SettingsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = SettingsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

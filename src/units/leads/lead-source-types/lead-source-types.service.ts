import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeadSourceTypes } from 'src/models/leads/lead_source_types.entity';
import { Repository } from 'typeorm';
import { LeadSourceTypesDTO } from './lead-source-types.dto';


@Injectable()
export class LeadSourceTypesService {
  constructor(
    @InjectRepository(LeadSourceTypes)
    private readonly repo: Repository<LeadSourceTypes>,
  ) {}

  public async getAll(): Promise<LeadSourceTypesDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LeadSourceTypesDTO.fromEntity(e)));
  }

  public async getByLanguage(language: string): Promise<LeadSourceTypesDTO[]> {
    return await this.repo
      .find({ where: { language_id: language } })
      .then((datas) => datas.map((e) => LeadSourceTypesDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<LeadSourceTypesDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => LeadSourceTypesDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<LeadSourceTypesDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => LeadSourceTypesDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<LeadSourceTypesDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => LeadSourceTypesDTO.fromEntity(datas));
  }

  public async create(dto: LeadSourceTypesDTO): Promise<LeadSourceTypesDTO> {
    return await this.repo
      .save(LeadSourceTypesDTO.toEntity(dto))
      .then((e) => LeadSourceTypesDTO.fromEntity(e));
  }

  public async update(id: string, dto: LeadSourceTypesDTO): Promise<LeadSourceTypesDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadSourceTypesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<LeadSourceTypesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadSourceTypesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<LeadSourceTypesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadSourceTypesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

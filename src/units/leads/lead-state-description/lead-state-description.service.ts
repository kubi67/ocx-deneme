import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeadStatesDescriptions } from 'src/models/leads/lead_state_descriptions.entity';
import { Repository } from 'typeorm';
import { LeadStateDescriptionDTO } from './lead-state-description.dto';

@Injectable()
export class LeadStateDescriptionService {
  constructor(
    @InjectRepository(LeadStatesDescriptions)
    private readonly repo: Repository<LeadStatesDescriptions>,
  ) {}

  public async getAll(): Promise<LeadStateDescriptionDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LeadStateDescriptionDTO.fromEntity(e)));
  }

  public async getByLanguage(language: string): Promise<LeadStateDescriptionDTO[]> {
    return await this.repo
      .find({ where: { language_id: language } })
      .then((datas) => datas.map((e) => LeadStateDescriptionDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<LeadStateDescriptionDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => LeadStateDescriptionDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<LeadStateDescriptionDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => LeadStateDescriptionDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<LeadStateDescriptionDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => LeadStateDescriptionDTO.fromEntity(datas));
  }

  public async create(dto: LeadStateDescriptionDTO): Promise<LeadStateDescriptionDTO> {
    return await this.repo
      .save(LeadStateDescriptionDTO.toEntity(dto))
      .then((e) => LeadStateDescriptionDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: LeadStateDescriptionDTO,
  ): Promise<LeadStateDescriptionDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadStateDescriptionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<LeadStateDescriptionDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadStateDescriptionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<LeadStateDescriptionDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadStateDescriptionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

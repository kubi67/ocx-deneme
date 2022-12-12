import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeadPool } from 'src/models/leads/lead_pool.entity';
import { Repository } from 'typeorm';
import { LeadPoolDTO } from './leadpools.dto';

@Injectable()
export class LeadpoolsService {
  constructor(
    @InjectRepository(LeadPool)
    private readonly repo: Repository<LeadPool>,
  ) {}

  public async getAll(): Promise<LeadPoolDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LeadPoolDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<LeadPoolDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => LeadPoolDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<LeadPoolDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => LeadPoolDTO.fromEntity(e)));
  }

  public async getByBroker(broker: string): Promise<LeadPoolDTO[]> {
    return await this.repo
      .find({ where: { assigned_broker: broker } })
      .then((datas) => datas.map((e) => LeadPoolDTO.fromEntity(e)));
  }

  public async getByAssignedUser(assigned: string): Promise<LeadPoolDTO[]> {
    return await this.repo
      .find({ where: { assigned_user: assigned } })
      .then((datas) => datas.map((e) => LeadPoolDTO.fromEntity(e)));
  }

  public async getByPreferenceUser(preference: string): Promise<LeadPoolDTO[]> {
    return await this.repo
      .find({ where: { preference_user: preference } })
      .then((datas) => datas.map((e) => LeadPoolDTO.fromEntity(e)));
  }

  public async getBySourceType(sourceType: string): Promise<LeadPoolDTO[]> {
    return await this.repo
      .find({ where: { source_type: sourceType } })
      .then((datas) => datas.map((e) => LeadPoolDTO.fromEntity(e)));
  }

  public async getBySourceID(sourceID: string): Promise<LeadPoolDTO[]> {
    return await this.repo
      .find({ where: { source_id: sourceID } })
      .then((datas) => datas.map((e) => LeadPoolDTO.fromEntity(e)));
  }

  public async getByState(state: number): Promise<LeadPoolDTO[]> {
    return await this.repo
      .find({ where: { state:state } })
      .then((datas) => datas.map((e) => LeadPoolDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<LeadPoolDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => LeadPoolDTO.fromEntity(datas));
  }

  public async create(dto: LeadPoolDTO): Promise<LeadPoolDTO> {
    return await this.repo
      .save(LeadPoolDTO.toEntity(dto))
      .then((e) => LeadPoolDTO.fromEntity(e));
  }

  public async update(id: string, dto: LeadPoolDTO): Promise<LeadPoolDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadPoolDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<LeadPoolDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadPoolDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<LeadPoolDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadPoolDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

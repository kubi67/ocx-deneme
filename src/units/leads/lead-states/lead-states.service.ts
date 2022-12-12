import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { BrokerUser } from 'src/models/brokers/broker_user.entity';
import { LeadStates } from 'src/models/leads/lead_states.entity';
import { UsersService } from 'src/units/user/user/user.service';
import { Repository } from 'typeorm';
import { LeadStatesDTO } from './lead-states.dto';

@Injectable()
export class LeadStatesService {
  constructor(
    @InjectRepository(LeadStates)
    private readonly repo: Repository<LeadStates>,
  ) {}

  public async getAll(): Promise<LeadStatesDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LeadStatesDTO.fromEntity(e)));
  }

  // public async getByLanguage(language: string): Promise<LeadStatesDTO[]> {
  //   return await this.repo
  //     .find({ where: { language_id: language } })
  //     .then((datas) => datas.map((e) => LeadStatesDTO.fromEntity(e)));
  // }

  public async getAllByStatus(status: boolean): Promise<LeadStatesDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => LeadStatesDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<LeadStatesDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => LeadStatesDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<LeadStatesDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => LeadStatesDTO.fromEntity(datas));
  }

  public async create(dto: LeadStatesDTO): Promise<LeadStatesDTO> {
    return await this.repo
      .save(LeadStatesDTO.toEntity(dto))
      .then((e) => LeadStatesDTO.fromEntity(e));
  }

  public async update(id: string, dto: LeadStatesDTO): Promise<LeadStatesDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadStatesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<LeadStatesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadStatesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<LeadStatesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LeadStatesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

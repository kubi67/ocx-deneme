import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from 'src/models/teams/teams.entity';
import { Repository } from 'typeorm';
import { TeamsDTO } from './teams.dto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly repo: Repository<Team>,
  ) {}

  public async getAll(): Promise<TeamsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => TeamsDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<TeamsDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => TeamsDTO.fromEntity(e)));
  }

  public async getByBrokerID(id: string): Promise<TeamsDTO[]> {
    return await this.repo
      .find({ where: { broker_id: id } })
      .then((datas) => datas.map((e) => TeamsDTO.fromEntity(e)));
  }

  public async getByName(name: string): Promise<TeamsDTO[]> {
    return await this.repo
      .find({ where: { name } })
      .then((datas) => datas.map((e) => TeamsDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<TeamsDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => TeamsDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<TeamsDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => TeamsDTO.fromEntity(datas));
  }

  public async create(dto: TeamsDTO): Promise<TeamsDTO> {
    return await this.repo
      .save(TeamsDTO.toEntity(dto))
      .then((e) => TeamsDTO.fromEntity(e));
  }

  public async update(id: string, dto: TeamsDTO): Promise<TeamsDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = TeamsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<TeamsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = TeamsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<TeamsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = TeamsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

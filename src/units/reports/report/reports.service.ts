import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reports } from 'src/models/reports/reports.entity';

import { Repository } from 'typeorm';
import { ReportsDTO } from './reports.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Reports)
    private readonly repo: Repository<Reports>,
  ) {}

  public async getAll(): Promise<ReportsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => ReportsDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<ReportsDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => ReportsDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<ReportsDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => ReportsDTO.fromEntity(e)));
  }

  public async getByOwner(id: string): Promise<ReportsDTO[]> {
    return await this.repo
      .find({ where: { owner_id: id } })
      .then((datas) => datas.map((e) => ReportsDTO.fromEntity(e)));
  }

  public async getByState(state: number): Promise<ReportsDTO[]> {
    return await this.repo
      .find({ where: { state } })
      .then((datas) => datas.map((e) => ReportsDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<ReportsDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => ReportsDTO.fromEntity(datas));
  }

  public async create(dto: ReportsDTO): Promise<ReportsDTO> {
    return await this.repo
      .save(ReportsDTO.toEntity(dto))
      .then((e) => ReportsDTO.fromEntity(e));
  }

  public async update(id: string, dto: ReportsDTO): Promise<ReportsDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = ReportsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async getAllWithAll(): Promise<any> {
    const data = await this.repo.query(
      `SELECT * FROM public."getLeadsWithAll"`,
    );
    return data;
  }

  public async changeStatus(id: string): Promise<ReportsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = ReportsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<ReportsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = ReportsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

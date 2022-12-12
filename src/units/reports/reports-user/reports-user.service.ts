import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportUser } from 'src/models/reports/reports_user.entity';

import { Repository } from 'typeorm';
import { ReportsUserDTO } from './reports-user.dto';

@Injectable()
export class ReportsUserService {
  constructor(
    @InjectRepository(ReportUser)
    private readonly repo: Repository<ReportUser>,
  ) {}

  public async getAll(): Promise<ReportsUserDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => ReportsUserDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<ReportsUserDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => ReportsUserDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<ReportsUserDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => ReportsUserDTO.fromEntity(e)));
  }

  public async getByUser(id: string): Promise<ReportsUserDTO[]> {
    return await this.repo
      .find({ where: { user_id: id } })
      .then((datas) => datas.map((e) => ReportsUserDTO.fromEntity(e)));
  }

  public async getByReport(id: string): Promise<ReportsUserDTO[]> {
    return await this.repo
      .find({ where: { report_id: id } })
      .then((datas) => datas.map((e) => ReportsUserDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<ReportsUserDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => ReportsUserDTO.fromEntity(datas));
  }

  public async create(dto: ReportsUserDTO): Promise<ReportsUserDTO> {
    return await this.repo
      .save(ReportsUserDTO.toEntity(dto))
      .then((e) => ReportsUserDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: ReportsUserDTO,
  ): Promise<ReportsUserDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = ReportsUserDTO.fromEntity(
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

  public async changeStatus(id: string): Promise<ReportsUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = ReportsUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<ReportsUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = ReportsUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuditLog } from 'src/models/logs/audit_log.entity';
import { Repository } from 'typeorm';
import { AuditLogsDTO } from './audit-logs.dto';

@Injectable()
export class AuditLogService {
  constructor(
    @InjectRepository(AuditLog)
    private readonly repo: Repository<AuditLog>,
  ) {}

  public async getAll(): Promise<AuditLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => AuditLogsDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<AuditLogsDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => AuditLogsDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<AuditLogsDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => AuditLogsDTO.fromEntity(e)));
  }

  public async getByUser(id: string): Promise<AuditLogsDTO[]> {
    return await this.repo
      .find({ where: { user_id: id } })
      .then((datas) => datas.map((e) => AuditLogsDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<AuditLogsDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => AuditLogsDTO.fromEntity(datas));
  }

  public async create(dto: AuditLogsDTO): Promise<AuditLogsDTO> {
    return await this.repo
      .save(AuditLogsDTO.toEntity(dto))
      .then((e) => AuditLogsDTO.fromEntity(e));
  }

  public async update(id: string, dto: AuditLogsDTO): Promise<AuditLogsDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = AuditLogsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<AuditLogsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = AuditLogsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<AuditLogsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = AuditLogsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

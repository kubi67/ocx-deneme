import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from 'src/models/notifications/notifications.entity';

import { Repository } from 'typeorm';
import { NotificationDTO } from './notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly repo: Repository<Notification>,
  ) {}

  public async getAll(): Promise<NotificationDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => NotificationDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<NotificationDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => NotificationDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<NotificationDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => NotificationDTO.fromEntity(e)));
  }

  public async getByNotificationType(type: number): Promise<NotificationDTO[]> {
    return await this.repo
      .find({ where: { notification_type: type } })
      .then((datas) => datas.map((e) => NotificationDTO.fromEntity(e)));
  }

  public async getByStatus(status: number): Promise<NotificationDTO[]> {
    return await this.repo
      .find({ where: { status } })
      .then((datas) => datas.map((e) => NotificationDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<NotificationDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => NotificationDTO.fromEntity(datas));
  }

  public async create(dto: NotificationDTO): Promise<NotificationDTO> {
    return await this.repo
      .save(NotificationDTO.toEntity(dto))
      .then((e) => NotificationDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: NotificationDTO,
  ): Promise<NotificationDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = NotificationDTO.fromEntity(
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

  public async changeStatus(id: string): Promise<NotificationDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = NotificationDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<NotificationDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = NotificationDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

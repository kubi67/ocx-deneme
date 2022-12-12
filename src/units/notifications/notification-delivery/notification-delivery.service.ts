import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationDelivery } from 'src/models/notifications/notification_delivery.entity';

import { Repository } from 'typeorm';
import { NotificationDeliveryDTO } from './notification-delivery.dto';

@Injectable()
export class NotificationDeliveryService {
  constructor(
    @InjectRepository(NotificationDelivery)
    private readonly repo: Repository<NotificationDelivery>,
  ) {}

  public async getAll(): Promise<NotificationDeliveryDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => NotificationDeliveryDTO.fromEntity(e)));
  }

  public async getAllByStatus(
    status: boolean,
  ): Promise<NotificationDeliveryDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => NotificationDeliveryDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<NotificationDeliveryDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => NotificationDeliveryDTO.fromEntity(e)));
  }

  public async getByUser(id: string): Promise<NotificationDeliveryDTO[]> {
    return await this.repo
      .find({ where: { user_id: id } })
      .then((datas) => datas.map((e) => NotificationDeliveryDTO.fromEntity(e)));
  }

  public async getByNotification(
    id: string,
  ): Promise<NotificationDeliveryDTO[]> {
    return await this.repo
      .find({ where: { notification_id: id } })
      .then((datas) => datas.map((e) => NotificationDeliveryDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<NotificationDeliveryDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => NotificationDeliveryDTO.fromEntity(datas));
  }

  public async create(
    dto: NotificationDeliveryDTO,
  ): Promise<NotificationDeliveryDTO> {
    return await this.repo
      .save(NotificationDeliveryDTO.toEntity(dto))
      .then((e) => NotificationDeliveryDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: NotificationDeliveryDTO,
  ): Promise<NotificationDeliveryDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = NotificationDeliveryDTO.fromEntity(
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

  public async changeStatus(id: string): Promise<NotificationDeliveryDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = NotificationDeliveryDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<NotificationDeliveryDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = NotificationDeliveryDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

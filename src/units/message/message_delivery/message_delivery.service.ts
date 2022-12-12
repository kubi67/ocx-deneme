import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDelivery } from 'src/models/messages/message_delivery.entity';

import { Repository } from 'typeorm';
import { MessageDeliveryDTO } from './message_delivery.dto';

@Injectable()
export class MessageDeliveryService {
  constructor(
    @InjectRepository(MessageDelivery)
    private readonly repo: Repository<MessageDelivery>,
  ) {}

  public async getAll(): Promise<MessageDeliveryDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => MessageDeliveryDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<MessageDeliveryDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => MessageDeliveryDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<MessageDeliveryDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => MessageDeliveryDTO.fromEntity(e)));
  }

  public async getByMessage(id: string): Promise<MessageDeliveryDTO[]> {
    return await this.repo
      .find({ where: { message_id: id } })
      .then((datas) => datas.map((e) => MessageDeliveryDTO.fromEntity(e)));
  }

  public async getByUser(id: string): Promise<MessageDeliveryDTO[]> {
    return await this.repo
      .find({ where: { user_id: id } })
      .then((datas) => datas.map((e) => MessageDeliveryDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<MessageDeliveryDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => MessageDeliveryDTO.fromEntity(datas));
  }

  public async create(dto: MessageDeliveryDTO): Promise<MessageDeliveryDTO> {
    return await this.repo
      .save(MessageDeliveryDTO.toEntity(dto))
      .then((e) => MessageDeliveryDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: MessageDeliveryDTO,
  ): Promise<MessageDeliveryDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = MessageDeliveryDTO.fromEntity(
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

  public async changeStatus(id: string): Promise<MessageDeliveryDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = MessageDeliveryDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<MessageDeliveryDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = MessageDeliveryDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

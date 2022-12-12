import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageBoard } from 'src/models/messages/message_board.entity';

import { Repository } from 'typeorm';
import { MessageBoardDTO } from './messages.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageBoard)
    private readonly repo: Repository<MessageBoard>,
  ) {}

  public async getAll(): Promise<MessageBoardDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => MessageBoardDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<MessageBoardDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => MessageBoardDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<MessageBoardDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => MessageBoardDTO.fromEntity(e)));
  }

  public async getByAuthor(id: string): Promise<MessageBoardDTO[]> {
    return await this.repo
      .find({ where: { author_id: id } })
      .then((datas) => datas.map((e) => MessageBoardDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<MessageBoardDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => MessageBoardDTO.fromEntity(datas));
  }

  public async create(dto: MessageBoardDTO): Promise<MessageBoardDTO> {
    return await this.repo
      .save(MessageBoardDTO.toEntity(dto))
      .then((e) => MessageBoardDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: MessageBoardDTO,
  ): Promise<MessageBoardDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = MessageBoardDTO.fromEntity(
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

  public async changeStatus(id: string): Promise<MessageBoardDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = MessageBoardDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<MessageBoardDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = MessageBoardDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

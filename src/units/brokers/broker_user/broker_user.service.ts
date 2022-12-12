import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrokerUser } from 'src/models/brokers/broker_user.entity';
import { Repository } from 'typeorm';
import { BrokerUserDTO } from './broker_user.dto';

@Injectable()
export class BrokerUserService {
  constructor(
    @InjectRepository(BrokerUser)
    private readonly repo: Repository<BrokerUser>,
  ) {}

  public async getAll(): Promise<BrokerUserDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => BrokerUserDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<BrokerUserDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => BrokerUserDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<BrokerUserDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => BrokerUserDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<BrokerUserDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => BrokerUserDTO.fromEntity(datas));
  }

  public async create(dto: BrokerUserDTO): Promise<BrokerUserDTO> {
    return await this.repo
      .save(BrokerUserDTO.toEntity(dto))
      .then((e) => BrokerUserDTO.fromEntity(e));
  }

  public async update(id: string, dto: BrokerUserDTO): Promise<BrokerUserDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = BrokerUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<BrokerUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = BrokerUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<BrokerUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = BrokerUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrokerAffiliate } from 'src/models/brokers/broker_affiliate.entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { BrokerAffiliateDTO } from './broker_affiliate.dto';

@Injectable()
export class BrokerAffiliateService {
  constructor(
    @InjectRepository(BrokerAffiliate)
    private readonly repo: Repository<BrokerAffiliate>,
  ) {}

  public async getAll(): Promise<BrokerAffiliateDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => BrokerAffiliateDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<BrokerAffiliateDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => BrokerAffiliateDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<BrokerAffiliateDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => BrokerAffiliateDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<BrokerAffiliateDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => BrokerAffiliateDTO.fromEntity(datas));
  }

  public async create(dto: BrokerAffiliateDTO): Promise<BrokerAffiliateDTO> {
    return await this.repo
      .save(BrokerAffiliateDTO.toEntity(dto))
      .then((e) => BrokerAffiliateDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: BrokerAffiliateDTO,
  ): Promise<BrokerAffiliateDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = BrokerAffiliateDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<BrokerAffiliateDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = BrokerAffiliateDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<BrokerAffiliateDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = BrokerAffiliateDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

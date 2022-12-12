import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Adcampaigns } from 'src/models/campaigns/ad_campaigns.entity';
import { Repository } from 'typeorm';
import { AdCampaignsDTO } from './campaign.dto';

@Injectable()
export class AdCampaignsService {
  constructor(
    @InjectRepository(Adcampaigns)
    private readonly repo: Repository<Adcampaigns>,
  ) {}

  public async getAll(): Promise<AdCampaignsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => AdCampaignsDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<AdCampaignsDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => AdCampaignsDTO.fromEntity(e)));
  }

  public async getByBrokerID(brokerID: string): Promise<AdCampaignsDTO[]> {
    return await this.repo
      .find({ where: { broker_id: brokerID } })
      .then((datas) => datas.map((e) => AdCampaignsDTO.fromEntity(e)));
  }

  public async getByUtmSource(utmSource: string): Promise<AdCampaignsDTO[]> {
    return await this.repo
      .find({ where: { utm_source: utmSource } })
      .then((datas) => datas.map((e) => AdCampaignsDTO.fromEntity(e)));
  }

  public async getByUtmCampaign(utmCampaign: string): Promise<AdCampaignsDTO[]> {
    return await this.repo
      .find({ where: { utm_campaign: utmCampaign } })
      .then((datas) => datas.map((e) => AdCampaignsDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<AdCampaignsDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => AdCampaignsDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<AdCampaignsDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => AdCampaignsDTO.fromEntity(datas));
  }

  public async create(dto: AdCampaignsDTO): Promise<AdCampaignsDTO> {
    return await this.repo
      .save(AdCampaignsDTO.toEntity(dto))
      .then((e) => AdCampaignsDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: AdCampaignsDTO,
  ): Promise<AdCampaignsDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = AdCampaignsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<AdCampaignsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = AdCampaignsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<AdCampaignsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = AdCampaignsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

import { Adcampaigns } from 'src/models/campaigns/ad_campaigns.entity';
import { Repository } from 'typeorm';
import { AdCampaignsDTO } from './campaign.dto';
export declare class AdCampaignsService {
    private readonly repo;
    constructor(repo: Repository<Adcampaigns>);
    getAll(): Promise<AdCampaignsDTO[]>;
    getAllByStatus(status: boolean): Promise<AdCampaignsDTO[]>;
    getByBrokerID(brokerID: string): Promise<AdCampaignsDTO[]>;
    getByUtmSource(utmSource: string): Promise<AdCampaignsDTO[]>;
    getByUtmCampaign(utmCampaign: string): Promise<AdCampaignsDTO[]>;
    getByIdMany(id: string): Promise<AdCampaignsDTO[]>;
    getById(id: string): Promise<AdCampaignsDTO>;
    create(dto: AdCampaignsDTO): Promise<AdCampaignsDTO>;
    update(id: string, dto: AdCampaignsDTO): Promise<AdCampaignsDTO>;
    changeStatus(id: string): Promise<AdCampaignsDTO>;
    softDelete(id: string): Promise<AdCampaignsDTO>;
    hardDelete(id: string): Promise<any>;
}

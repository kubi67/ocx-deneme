import { AdCampaignsDTO } from './campaign.dto';
import { AdCampaignsService } from './campaigns.service';
export declare class AdCampaignsController {
    private readonly adCampaignService;
    constructor(adCampaignService: AdCampaignsService);
    getAll(): Promise<AdCampaignsDTO[]>;
    getAllByStatus(status: boolean): Promise<AdCampaignsDTO[]>;
    getByBroker(broker: string): Promise<AdCampaignsDTO[]>;
    getByUtmSource(utmSource: string): Promise<AdCampaignsDTO[]>;
    getByCampaign(campaign: string): Promise<AdCampaignsDTO[]>;
    get(id: string): Promise<AdCampaignsDTO>;
    create(dto: AdCampaignsDTO): Promise<AdCampaignsDTO>;
    update(id: string, dto: AdCampaignsDTO): Promise<AdCampaignsDTO>;
    softDelete(id: string): Promise<AdCampaignsDTO>;
    hardDelete(id: string): Promise<any>;
}

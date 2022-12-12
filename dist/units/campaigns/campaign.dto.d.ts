import { Adcampaigns } from 'src/models/campaigns/ad_campaigns.entity';
export declare class AdCampaignsDTO implements Readonly<AdCampaignsDTO> {
    id: string;
    name: string;
    budget: number;
    arrival: number;
    broker_id: string;
    identifier: string;
    status: number;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_term: string;
    currency_type: string;
    start_at: Date;
    expire_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<AdCampaignsDTO>): AdCampaignsDTO;
    static fromEntity(entity: Adcampaigns): AdCampaignsDTO;
    static toEntity(dto: Partial<AdCampaignsDTO>): Adcampaigns;
}

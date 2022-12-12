import { BaseEntity } from '../base.entity';
export declare class Adcampaigns extends BaseEntity {
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
}

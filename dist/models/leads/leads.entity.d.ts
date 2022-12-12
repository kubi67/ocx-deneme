import { BaseEntity } from '../base.entity';
export declare class Leads extends BaseEntity {
    broker_id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    assigned_broker: string;
    preference_user: string;
    source_type: string;
    source_id: string;
    state: number;
    contact_preference: number;
    campaign_id: string;
    assigned_user: string;
    isDelivered: boolean;
}

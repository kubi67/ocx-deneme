import { BaseEntity } from '../base.entity';
export declare class LeadPool extends BaseEntity {
    campaign_id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    assigned_broker: string;
    assigned_user: string;
    preference_user: string;
    source_type: string;
    source_id: string;
    state: number;
}

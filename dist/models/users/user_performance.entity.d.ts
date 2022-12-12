import { BaseEntity } from '../base.entity';
export declare class UserPerformance extends BaseEntity {
    user_id: string;
    lead_capacity: number;
    total_lead: number;
    assigned_by: string;
    last_assigned_at: Date;
    point: number;
}

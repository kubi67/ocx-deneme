import { BaseEntity } from '../base.entity';
export declare class AuditLog extends BaseEntity {
    event_type: number;
    event: string;
    event_data: string;
    url: string;
    ip_addr: string;
    user_agent: string;
    tags: number;
    user_id: string;
}

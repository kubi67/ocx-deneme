import { BaseEntity } from '../base.entity';
export declare class ApiClients extends BaseEntity {
    user_id: string;
    api_key: string;
    api_secret: string;
    last_access_at: Date;
    agent: string;
}

import { BaseEntity } from '../base.entity';
export declare class UsersLogin extends BaseEntity {
    user_id: string;
    ip_addr: string;
    last_access_at: Date;
    agent: string;
}

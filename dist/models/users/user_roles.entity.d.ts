import { BaseEntity } from '../base.entity';
export declare class UserRoles extends BaseEntity {
    user_id: string;
    role_id: string;
    assigned_at: Date;
    assigned_by: string;
}

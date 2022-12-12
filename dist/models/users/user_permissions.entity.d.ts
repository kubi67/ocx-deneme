import { BaseEntity } from '../base.entity';
export declare class UserPermissions extends BaseEntity {
    user_id: string;
    permission_id: string;
    assigned_at: Date;
    assigned_by: string;
}

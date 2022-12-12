import { BaseEntity } from '../base.entity';
export declare class RolePermissions extends BaseEntity {
    role_id: string;
    permission_id: string;
    assigned_at: Date;
    assigned_by: string;
}

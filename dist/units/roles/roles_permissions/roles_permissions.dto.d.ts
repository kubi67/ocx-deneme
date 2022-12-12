import { RolePermissions } from 'src/models/rolesNpermissions/role_permissions.entity';
export declare class RolesPermissionsDTO implements Readonly<RolesPermissionsDTO> {
    id: string;
    role_id: string;
    permission_id: string;
    assigned_by: string;
    assigned_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<RolesPermissionsDTO>): RolesPermissionsDTO;
    static fromEntity(entity: RolePermissions): RolesPermissionsDTO;
    static toEntity(dto: Partial<RolesPermissionsDTO>): RolePermissions;
}

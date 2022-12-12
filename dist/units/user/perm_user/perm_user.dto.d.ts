import { UserPermissions } from 'src/models/users/user_permissions.entity';
export declare class PermUserDTO implements Readonly<PermUserDTO> {
    id: string;
    user_id: string;
    permission_id: string;
    assigned_by: string;
    assigned_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<PermUserDTO>): PermUserDTO;
    static fromEntity(entity: UserPermissions): PermUserDTO;
    static toEntity(dto: Partial<PermUserDTO>): UserPermissions;
}

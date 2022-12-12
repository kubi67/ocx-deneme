import { UserRoles } from 'src/models/users/user_roles.entity';
export declare class RoleUserDTO implements Readonly<RoleUserDTO> {
    id: string;
    user_id: string;
    role_id: string;
    assigned_by: string;
    assigned_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<RoleUserDTO>): RoleUserDTO;
    static fromEntity(entity: UserRoles): RoleUserDTO;
    static toEntity(dto: Partial<RoleUserDTO>): UserRoles;
}

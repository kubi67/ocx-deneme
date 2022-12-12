import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
export declare class PermissionDTO implements Readonly<PermissionDTO> {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<PermissionDTO>): PermissionDTO;
    static fromEntity(entity: Permission): PermissionDTO;
    static toEntity(dto: Partial<PermissionDTO>): Permission;
}

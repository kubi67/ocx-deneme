import { Roles } from 'src/models/rolesNpermissions/roles.entity';
export declare class RolesDTO implements Readonly<RolesDTO> {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<RolesDTO>): RolesDTO;
    static fromEntity(entity: Roles): RolesDTO;
    static toEntity(dto: Partial<RolesDTO>): Roles;
}

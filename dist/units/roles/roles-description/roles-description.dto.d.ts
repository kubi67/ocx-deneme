import { RolesDescription } from 'src/models/rolesNpermissions/roles_description.entity';
export declare class RolesDescriptionDTO implements Readonly<RolesDescriptionDTO> {
    id: string;
    role_id: string;
    language_id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<RolesDescriptionDTO>): RolesDescriptionDTO;
    static fromEntity(entity: RolesDescription): RolesDescriptionDTO;
    static toEntity(dto: Partial<RolesDescriptionDTO>): RolesDescription;
}

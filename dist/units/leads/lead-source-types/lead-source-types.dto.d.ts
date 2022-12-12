import { LeadSourceTypes } from 'src/models/leads/lead_source_types.entity';
export declare class LeadSourceTypesDTO implements Readonly<LeadSourceTypesDTO> {
    id: string;
    language_id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<LeadSourceTypesDTO>): LeadSourceTypesDTO;
    static fromEntity(entity: LeadSourceTypes): LeadSourceTypesDTO;
    static toEntity(dto: Partial<LeadSourceTypesDTO>): LeadSourceTypes;
}

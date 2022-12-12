import { LeadStatesDescriptions } from 'src/models/leads/lead_state_descriptions.entity';
export declare class LeadStateDescriptionDTO implements Readonly<LeadStateDescriptionDTO> {
    id: string;
    lead_state_id: string;
    language_id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<LeadStateDescriptionDTO>): LeadStateDescriptionDTO;
    static fromEntity(entity: LeadStatesDescriptions): LeadStateDescriptionDTO;
    static toEntity(dto: Partial<LeadStateDescriptionDTO>): LeadStatesDescriptions;
}

import { LeadStates } from 'src/models/leads/lead_states.entity';
export declare class LeadStatesDTO implements Readonly<LeadStatesDTO> {
    id: string;
    language_id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<LeadStatesDTO>): LeadStatesDTO;
    static fromEntity(entity: LeadStates): LeadStatesDTO;
    static toEntity(dto: Partial<LeadStatesDTO>): LeadStates;
}

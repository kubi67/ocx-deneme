import { LeadPool } from 'src/models/leads/lead_pool.entity';
export declare class LeadPoolDTO implements Readonly<LeadPoolDTO> {
    id: string;
    campaign_id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    assigned_broker: string;
    assigned_user: string;
    preference_user: string;
    source_type: string;
    source_id: string;
    state: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<LeadPoolDTO>): LeadPoolDTO;
    static fromEntity(entity: LeadPool): LeadPoolDTO;
    static toEntity(dto: Partial<LeadPoolDTO>): LeadPool;
}

import { Leads } from 'src/models/leads/leads.entity';
export declare class LeadDTO implements Readonly<LeadDTO> {
    id: string;
    broker_id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    state: number;
    contact_preference: number;
    campaign_id: string;
    assigned_user: string;
    isDelivered: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<LeadDTO>): LeadDTO;
    static fromEntity(entity: Leads): LeadDTO;
    static toEntity(dto: Partial<LeadDTO>): Leads;
}

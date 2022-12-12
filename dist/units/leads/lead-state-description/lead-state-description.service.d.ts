import { LeadStatesDescriptions } from 'src/models/leads/lead_state_descriptions.entity';
import { Repository } from 'typeorm';
import { LeadStateDescriptionDTO } from './lead-state-description.dto';
export declare class LeadStateDescriptionService {
    private readonly repo;
    constructor(repo: Repository<LeadStatesDescriptions>);
    getAll(): Promise<LeadStateDescriptionDTO[]>;
    getByLanguage(language: string): Promise<LeadStateDescriptionDTO[]>;
    getAllByStatus(status: boolean): Promise<LeadStateDescriptionDTO[]>;
    getByIdMany(id: string): Promise<LeadStateDescriptionDTO[]>;
    getById(id: string): Promise<LeadStateDescriptionDTO>;
    create(dto: LeadStateDescriptionDTO): Promise<LeadStateDescriptionDTO>;
    update(id: string, dto: LeadStateDescriptionDTO): Promise<LeadStateDescriptionDTO>;
    changeStatus(id: string): Promise<LeadStateDescriptionDTO>;
    softDelete(id: string): Promise<LeadStateDescriptionDTO>;
    hardDelete(id: string): Promise<any>;
}

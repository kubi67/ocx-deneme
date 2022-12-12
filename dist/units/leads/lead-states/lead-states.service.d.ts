import { LeadStates } from 'src/models/leads/lead_states.entity';
import { Repository } from 'typeorm';
import { LeadStatesDTO } from './lead-states.dto';
export declare class LeadStatesService {
    private readonly repo;
    constructor(repo: Repository<LeadStates>);
    getAll(): Promise<LeadStatesDTO[]>;
    getAllByStatus(status: boolean): Promise<LeadStatesDTO[]>;
    getByIdMany(id: string): Promise<LeadStatesDTO[]>;
    getById(id: string): Promise<LeadStatesDTO>;
    create(dto: LeadStatesDTO): Promise<LeadStatesDTO>;
    update(id: string, dto: LeadStatesDTO): Promise<LeadStatesDTO>;
    changeStatus(id: string): Promise<LeadStatesDTO>;
    softDelete(id: string): Promise<LeadStatesDTO>;
    hardDelete(id: string): Promise<any>;
}

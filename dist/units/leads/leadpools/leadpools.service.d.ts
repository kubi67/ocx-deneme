import { LeadPool } from 'src/models/leads/lead_pool.entity';
import { Repository } from 'typeorm';
import { LeadPoolDTO } from './leadpools.dto';
export declare class LeadpoolsService {
    private readonly repo;
    constructor(repo: Repository<LeadPool>);
    getAll(): Promise<LeadPoolDTO[]>;
    getAllByStatus(status: boolean): Promise<LeadPoolDTO[]>;
    getByIdMany(id: string): Promise<LeadPoolDTO[]>;
    getByBroker(broker: string): Promise<LeadPoolDTO[]>;
    getByAssignedUser(assigned: string): Promise<LeadPoolDTO[]>;
    getByPreferenceUser(preference: string): Promise<LeadPoolDTO[]>;
    getBySourceType(sourceType: string): Promise<LeadPoolDTO[]>;
    getBySourceID(sourceID: string): Promise<LeadPoolDTO[]>;
    getByState(state: number): Promise<LeadPoolDTO[]>;
    getById(id: string): Promise<LeadPoolDTO>;
    create(dto: LeadPoolDTO): Promise<LeadPoolDTO>;
    update(id: string, dto: LeadPoolDTO): Promise<LeadPoolDTO>;
    changeStatus(id: string): Promise<LeadPoolDTO>;
    softDelete(id: string): Promise<LeadPoolDTO>;
    hardDelete(id: string): Promise<any>;
}

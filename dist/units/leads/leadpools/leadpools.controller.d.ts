import { LeadPoolDTO } from './leadpools.dto';
import { LeadpoolsService } from './leadpools.service';
export declare class LeadPoolsController {
    private readonly leadPoolService;
    constructor(leadPoolService: LeadpoolsService);
    getAll(): Promise<LeadPoolDTO[]>;
    getAllByStatus(status: boolean): Promise<LeadPoolDTO[]>;
    getAllByBroker(broker: string): Promise<LeadPoolDTO[]>;
    getAllByAssigned(assigned: string): Promise<LeadPoolDTO[]>;
    getByPreference(preference: string): Promise<LeadPoolDTO[]>;
    getBySourceType(sourceType: string): Promise<LeadPoolDTO[]>;
    getBySourceID(sourceID: string): Promise<LeadPoolDTO[]>;
    getByState(state: number): Promise<LeadPoolDTO[]>;
    get(id: string): Promise<LeadPoolDTO>;
    create(dto: LeadPoolDTO): Promise<LeadPoolDTO>;
    update(id: string, dto: LeadPoolDTO): Promise<LeadPoolDTO>;
    softDelete(id: string): Promise<LeadPoolDTO>;
    hardDelete(id: string): Promise<any>;
}

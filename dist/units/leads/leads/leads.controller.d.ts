import { LeadDTO } from './leads.dto';
import { LeadsService } from './leads.service';
export declare class LeadsController {
    private readonly leadService;
    constructor(leadService: LeadsService);
    getAll(): Promise<LeadDTO[]>;
    getAllByStatus(status: boolean): Promise<LeadDTO[]>;
    get(id: string): Promise<LeadDTO>;
    getLeadsFull(): Promise<any>;
    getDelivered(): Promise<any>;
    getDeliveredByOperator(operator: string): Promise<LeadDTO[]>;
    getDeliveredFull(): Promise<any>;
    getDeliveredFullByOperator(operator: string): Promise<LeadDTO[]>;
    getByCampaign(campaign: string): Promise<LeadDTO[]>;
    getByDelivery(delivery: boolean): Promise<LeadDTO[]>;
    getByOperator(operator: string): Promise<LeadDTO[]>;
    getByAssignedUser(assigned: string): Promise<LeadDTO[]>;
    getByBroker(broker: string): Promise<LeadDTO[]>;
    getByState(state: number): Promise<LeadDTO[]>;
    create(dto: LeadDTO): Promise<LeadDTO>;
    createByQuery(dto: LeadDTO, id: string): Promise<LeadDTO>;
    createByQueryMultiple(dto: LeadDTO, id: string, count: number): Promise<LeadDTO>;
    update(id: string, dto: LeadDTO): Promise<LeadDTO>;
    softDelete(id: string): Promise<LeadDTO>;
    hardDelete(id: string): Promise<any>;
}

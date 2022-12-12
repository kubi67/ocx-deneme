import { LeadStatesDTO } from './lead-states.dto';
import { LeadStatesService } from './lead-states.service';
export declare class LeadStatesController {
    private readonly leadStateService;
    constructor(leadStateService: LeadStatesService);
    getAll(): Promise<LeadStatesDTO[]>;
    getAllByStatus(status: boolean): Promise<LeadStatesDTO[]>;
    get(id: string): Promise<LeadStatesDTO>;
    create(dto: LeadStatesDTO): Promise<LeadStatesDTO>;
    update(id: string, dto: LeadStatesDTO): Promise<LeadStatesDTO>;
    softDelete(id: string): Promise<LeadStatesDTO>;
    hardDelete(id: string): Promise<any>;
}

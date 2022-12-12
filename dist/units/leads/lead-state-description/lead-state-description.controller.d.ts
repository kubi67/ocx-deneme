import { LeadStateDescriptionDTO } from './lead-state-description.dto';
import { LeadStateDescriptionService } from './lead-state-description.service';
export declare class LeadStateDescriptionController {
    private readonly leadStateDescriptionService;
    constructor(leadStateDescriptionService: LeadStateDescriptionService);
    getAll(): Promise<LeadStateDescriptionDTO[]>;
    getAllByStatus(status: boolean): Promise<LeadStateDescriptionDTO[]>;
    getByLanguage(language: string): Promise<LeadStateDescriptionDTO[]>;
    get(id: string): Promise<LeadStateDescriptionDTO>;
    create(dto: LeadStateDescriptionDTO): Promise<LeadStateDescriptionDTO>;
    update(id: string, dto: LeadStateDescriptionDTO): Promise<LeadStateDescriptionDTO>;
    softDelete(id: string): Promise<LeadStateDescriptionDTO>;
    hardDelete(id: string): Promise<any>;
}

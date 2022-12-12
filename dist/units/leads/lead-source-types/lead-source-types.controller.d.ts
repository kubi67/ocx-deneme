import { LeadSourceTypesDTO } from './lead-source-types.dto';
import { LeadSourceTypesService } from './lead-source-types.service';
export declare class LeadSourceTypesController {
    private readonly leadSourceTypesService;
    constructor(leadSourceTypesService: LeadSourceTypesService);
    getAll(): Promise<LeadSourceTypesDTO[]>;
    getAllByStatus(status: boolean): Promise<LeadSourceTypesDTO[]>;
    getByLanguage(language: string): Promise<LeadSourceTypesDTO[]>;
    get(id: string): Promise<LeadSourceTypesDTO>;
    create(dto: LeadSourceTypesDTO): Promise<LeadSourceTypesDTO>;
    update(id: string, dto: LeadSourceTypesDTO): Promise<LeadSourceTypesDTO>;
    softDelete(id: string): Promise<LeadSourceTypesDTO>;
    hardDelete(id: string): Promise<any>;
}

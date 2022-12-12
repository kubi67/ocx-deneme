import { LeadSourceTypes } from 'src/models/leads/lead_source_types.entity';
import { Repository } from 'typeorm';
import { LeadSourceTypesDTO } from './lead-source-types.dto';
export declare class LeadSourceTypesService {
    private readonly repo;
    constructor(repo: Repository<LeadSourceTypes>);
    getAll(): Promise<LeadSourceTypesDTO[]>;
    getByLanguage(language: string): Promise<LeadSourceTypesDTO[]>;
    getAllByStatus(status: boolean): Promise<LeadSourceTypesDTO[]>;
    getByIdMany(id: string): Promise<LeadSourceTypesDTO[]>;
    getById(id: string): Promise<LeadSourceTypesDTO>;
    create(dto: LeadSourceTypesDTO): Promise<LeadSourceTypesDTO>;
    update(id: string, dto: LeadSourceTypesDTO): Promise<LeadSourceTypesDTO>;
    changeStatus(id: string): Promise<LeadSourceTypesDTO>;
    softDelete(id: string): Promise<LeadSourceTypesDTO>;
    hardDelete(id: string): Promise<any>;
}

import { LdRulesDescription } from 'src/models/deliveries/ld_rules_description.entity';
import { Repository } from 'typeorm';
import { LdRulesDescriptionDTO } from './ld-rules-description.dto';
export declare class LdRulesDescriptionService {
    private readonly repo;
    constructor(repo: Repository<LdRulesDescription>);
    getAll(): Promise<LdRulesDescriptionDTO[]>;
    getByLang(langID: string): Promise<LdRulesDescriptionDTO[]>;
    getByIdMany(id: string): Promise<LdRulesDescriptionDTO[]>;
    getAllByStatus(status: boolean): Promise<LdRulesDescriptionDTO[]>;
    getById(id: string): Promise<LdRulesDescriptionDTO>;
    create(dto: LdRulesDescriptionDTO): Promise<LdRulesDescriptionDTO>;
    update(id: string, dto: LdRulesDescriptionDTO): Promise<LdRulesDescriptionDTO>;
    changeStatus(id: string): Promise<LdRulesDescriptionDTO>;
    softDelete(id: string): Promise<LdRulesDescriptionDTO>;
    hardDelete(id: string): Promise<any>;
}

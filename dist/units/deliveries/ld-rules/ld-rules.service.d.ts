import { LdRules } from 'src/models/deliveries/ld_rules.entity';
import { Repository } from 'typeorm';
import { LdRulesDTO } from './ld-rules.dto';
export declare class LdRulesService {
    private readonly repo;
    constructor(repo: Repository<LdRules>);
    getAll(): Promise<LdRulesDTO[]>;
    getByName(name: string): Promise<LdRulesDTO[]>;
    getByIdMany(id: string): Promise<LdRulesDTO[]>;
    getAllByStatus(status: boolean): Promise<LdRulesDTO[]>;
    getById(id: string): Promise<LdRulesDTO>;
    create(dto: LdRulesDTO): Promise<LdRulesDTO>;
    update(id: string, dto: LdRulesDTO): Promise<LdRulesDTO>;
    changeStatus(id: string): Promise<LdRulesDTO>;
    softDelete(id: string): Promise<LdRulesDTO>;
    hardDelete(id: string): Promise<any>;
}

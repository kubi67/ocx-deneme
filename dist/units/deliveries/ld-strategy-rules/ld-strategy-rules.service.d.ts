import { LdStrategyRules } from 'src/models/deliveries/ld_strategy_rules.entity';
import { Repository } from 'typeorm';
import { LdStrategyRulesDTO } from './ld-strategy-rules.dto';
export declare class LdStrategyRulesService {
    private readonly repo;
    constructor(repo: Repository<LdStrategyRules>);
    getAll(): Promise<LdStrategyRulesDTO[]>;
    getByLdStrategy(ldStrategy: string): Promise<LdStrategyRulesDTO[]>;
    getByLdRule(ldRule: string): Promise<LdStrategyRulesDTO[]>;
    getByIdMany(id: string): Promise<LdStrategyRulesDTO[]>;
    getAllByStatus(status: boolean): Promise<LdStrategyRulesDTO[]>;
    getById(id: string): Promise<LdStrategyRulesDTO>;
    create(dto: LdStrategyRulesDTO): Promise<LdStrategyRulesDTO>;
    update(id: string, dto: LdStrategyRulesDTO): Promise<LdStrategyRulesDTO>;
    changeStatus(id: string): Promise<LdStrategyRulesDTO>;
    softDelete(id: string): Promise<LdStrategyRulesDTO>;
    hardDelete(id: string): Promise<any>;
}

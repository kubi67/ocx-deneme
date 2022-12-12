import { LdStrategyRulesDTO } from './ld-strategy-rules.dto';
import { LdStrategyRulesService } from './ld-strategy-rules.service';
export declare class LdStrategyRulesController {
    private readonly ldStrategyRulesService;
    constructor(ldStrategyRulesService: LdStrategyRulesService);
    getAll(): Promise<LdStrategyRulesDTO[]>;
    getAllByStatus(status: boolean): Promise<LdStrategyRulesDTO[]>;
    getByLdStrategy(strategy: string): Promise<LdStrategyRulesDTO[]>;
    getByLdRule(rule: string): Promise<LdStrategyRulesDTO[]>;
    get(id: string): Promise<LdStrategyRulesDTO>;
    create(dto: LdStrategyRulesDTO): Promise<LdStrategyRulesDTO>;
    update(id: string, dto: LdStrategyRulesDTO): Promise<LdStrategyRulesDTO>;
    softDelete(id: string): Promise<LdStrategyRulesDTO>;
    hardDelete(id: string): Promise<any>;
}

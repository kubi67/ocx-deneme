import { LdStrategyRules } from 'src/models/deliveries/ld_strategy_rules.entity';
export declare class LdStrategyRulesDTO implements Readonly<LdStrategyRulesDTO> {
    id: string;
    ld_strategy_id: string;
    ld_rule_id: string;
    sort_order: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<LdStrategyRulesDTO>): LdStrategyRulesDTO;
    static fromEntity(entity: LdStrategyRules): LdStrategyRulesDTO;
    static toEntity(dto: Partial<LdStrategyRulesDTO>): LdStrategyRules;
}

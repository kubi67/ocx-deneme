import { LdRules } from 'src/models/deliveries/ld_rules.entity';
export declare class LdRulesDTO implements Readonly<LdRulesDTO> {
    id: string;
    name: string;
    priority: string;
    data: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<LdRulesDTO>): LdRulesDTO;
    static fromEntity(entity: LdRules): LdRulesDTO;
    static toEntity(dto: Partial<LdRules>): LdRules;
}

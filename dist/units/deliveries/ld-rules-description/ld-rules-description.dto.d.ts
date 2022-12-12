import { LdRulesDescription } from 'src/models/deliveries/ld_rules_description.entity';
export declare class LdRulesDescriptionDTO implements Readonly<LdRulesDescriptionDTO> {
    id: string;
    ld_rules: string;
    language_id: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<LdRulesDescriptionDTO>): LdRulesDescriptionDTO;
    static fromEntity(entity: LdRulesDescription): LdRulesDescriptionDTO;
    static toEntity(dto: Partial<LdRulesDescriptionDTO>): LdRulesDescription;
}

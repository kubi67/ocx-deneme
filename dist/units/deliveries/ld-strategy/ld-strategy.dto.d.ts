import { LdStrategy } from 'src/models/deliveries/ld_strategy.entity';
export declare class LdStrategyDTO implements Readonly<LdStrategyDTO> {
    id: string;
    name: string;
    priority: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<LdStrategyDTO>): LdStrategyDTO;
    static fromEntity(entity: LdStrategy): LdStrategyDTO;
    static toEntity(dto: Partial<LdStrategyDTO>): LdStrategy;
}

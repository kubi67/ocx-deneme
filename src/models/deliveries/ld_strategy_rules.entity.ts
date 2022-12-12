import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'ld_strategy_rules' })
export class LdStrategyRules extends BaseEntity {
  @Column({ type: 'uuid'})
  ld_strategy_id: string;
  @Column({ type: 'uuid'})
  ld_rule_id: string;
  @Column({ type: 'integer'})
  sort_order: number;
}

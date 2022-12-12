import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'ld_rules_description' })
export class LdRulesDescription extends BaseEntity {
  @Column({ type: 'uuid'})
  ld_rules: string;
  @Column({ type: 'uuid'})
  language_id: string;
  @Column({ type: 'character varying', length:255})
  description: string;
}

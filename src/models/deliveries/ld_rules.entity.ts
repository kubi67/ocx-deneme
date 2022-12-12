import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'ld_rules' })
export class LdRules extends BaseEntity {
  @Column({ type: 'character varying', length:128})
  name: string;
  @Column({ type: 'integer'})
  priority: string;
  @Column({ type: 'json'})
  data: string;
}

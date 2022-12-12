import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'lead_states' })
export class LeadStates extends BaseEntity {
  @Column({ type: 'character varying', length: 64 })
  name: string;
}

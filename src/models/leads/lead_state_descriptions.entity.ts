import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'lead_states_descriptions' })
export class LeadStatesDescriptions extends BaseEntity {
  @Column({ type: 'uuid' })
  lead_state_id: string;
  @Column({ type: 'uuid' })
  language_id: string;
  @Column({ type: 'character varying', length: 64 })
  name: string;
}

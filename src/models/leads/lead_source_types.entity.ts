import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'lead_source_types' })
export class LeadSourceTypes extends BaseEntity {
  @Column({ type: 'uuid' })
  language_id: string;

  @Column({ type: 'character varying', length: 64 })
  name: string;
}

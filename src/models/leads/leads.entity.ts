import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'leads' })
export class Leads extends BaseEntity {
  @Column({ type: 'uuid', default: null })
  broker_id: string;

  @Column({ type: 'character varying', length: 64 })
  firstname: string;

  @Column({ type: 'character varying', length: 64 })
  lastname: string;

  @Column({ type: 'character varying', length: 128 })
  email: string;

  @Column({ type: 'character varying', length: 64, default: '' })
  phone: string;

  @Column({ type: 'uuid', default: null })
  assigned_broker: string;

  @Column({ type: 'uuid', default: null })
  preference_user: string;

  @Column({ type: 'uuid', default: null })
  source_type: string;

  @Column({ type: 'uuid', default: null })
  source_id: string;

  @Column({ type: 'integer', default: 0 })
  state: number;

  @Column({ type: 'integer', default: 0 })
  contact_preference: number;

  @Column({ type: 'uuid', default: null })
  campaign_id: string;

  @Column({ type: 'uuid', default: null })
  assigned_user: string;

  @Column({ type: 'boolean', default: false })
  isDelivered: boolean;
}

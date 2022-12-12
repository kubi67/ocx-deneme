import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'ad_campaigns' })
export class Adcampaigns extends BaseEntity {
  @Column({ type: 'character varying', length: 255 })
  name: string;

  @Column({ type: 'numeric', precision: 15, scale: 4 })
  budget: number;

  @Column({ type: 'bigint' })
  arrival: number;

  @Column({ type: 'uuid', default:null })
  broker_id: string;

  @Column({ type: 'json' })
  identifier: string;

  @Column({ type: 'smallint' })
  status: number;

  @Column({ type: 'character varying', length: 64 })
  utm_source: string;

  @Column({ type: 'character varying', length: 64 })
  utm_medium: string;

  @Column({ type: 'character varying', length: 64 })
  utm_campaign: string;

  @Column({ type: 'character varying', length: 128 })
  utm_content: string;

  @Column({ type: 'character varying', length: 128 })
  utm_term: string;

  @Column({ type: 'character varying', length: 8 })
  currency_type: string;

  
  @Column({ type: 'timestamptz' })
  start_at: Date;

  @Column({ type: 'timestamptz' })
  expire_at: Date;
}

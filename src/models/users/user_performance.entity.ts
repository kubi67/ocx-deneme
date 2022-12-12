import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_performance' })
export class UserPerformance extends BaseEntity {
  @Column({ type: 'character varying', length: 64 })
  user_id: string;
  @Column({ type: 'integer' })
  lead_capacity: number;
  @Column({ type: 'bigint' })
  total_lead: number;
  @Column({ type: 'character varying', length: 64 })
  assigned_by: string;
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  last_assigned_at: Date;
  @Column({ type: 'numeric', precision: 5, scale: 2 })
  point: number;
}

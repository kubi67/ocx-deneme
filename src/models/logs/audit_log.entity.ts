import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'audit_log' })
export class AuditLog extends BaseEntity {
  @Column({ type: 'integer' })
  event_type: number;

  @Column({ type: 'character varying', length: 255 })
  event: string;

  @Column({ type: 'json' })
  event_data: string;

  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'character varying', length: 64 })
  ip_addr: string;

  @Column({ type: 'character varying', length: 1024 })
  user_agent: string;

  @Column({ type: 'character varying', length: 1024 })
  tags: number;

  @Column({ type: 'uuid' })
  user_id: string;
}

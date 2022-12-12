import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'api_clients' })
export class ApiClients extends BaseEntity {
  @Column({ type: 'uuid' })
  user_id: string;
  @Column({ type: 'character varying', length: 128 })
  api_key: string;
  @Column({ type: 'character varying', length: 128 })
  api_secret: string;
  @Column({ type: 'timestamptz' })
  last_access_at: Date;
  @Column({ type: 'character varying', length: 1000 })
  agent: string;
}

import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'reports' })
export class Reports extends BaseEntity {
  @Column({ type: 'character varying', length: 128 })
  name: string;
  @Column({ type: 'uuid' })
  owner_id: string;
  @Column({ type: 'json' })
  data: string;
  @Column({ type: 'integer' })
  state: number;
  @Column({ type: 'integer' })
  type: number;
}

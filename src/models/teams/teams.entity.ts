import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'teams' })
export class Team extends BaseEntity {
  @Column({ type: 'uuid' })
  broker_id: string;
  @Column({ type: 'character varying', length: 128 })
  name: string;
}

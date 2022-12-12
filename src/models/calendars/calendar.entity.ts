import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'calendar' })
export class Calendar extends BaseEntity {
  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'character varying', length: 128 })
  name: string;

  @Column({ type: 'character varying', length: 128 })
  description: string;
}

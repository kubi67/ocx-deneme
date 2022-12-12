import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'calendar_space' })
export class CalendarSpace extends BaseEntity {
  @Column({ type: 'uuid' })
  owner_id: string;

  // takvimi görebileceklerin idsi
  @Column('uuid', { array: true })
  identity_id: string[];

  @Column({ type: 'uuid' })
  calendar_id: string;

  @Column({ type: 'character varying', length: 128 })
  description: string;
}

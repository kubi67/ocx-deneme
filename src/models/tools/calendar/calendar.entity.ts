import { BaseEntity } from 'src/models/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'calendar' })
export class Tasks extends BaseEntity {
  @Column({ type: 'character varying', length: 128 })
  note_id: string;

  @Column({ type: 'character varying', length: 128 })
  name: string;

  @Column({ type: 'boolean', default: false })
  sys_ownered: boolean;

  @Column({ type: 'uuid' })
  owner_id: string;

  @Column({ type: 'timestamptz' })
  start_at: Date;

  @Column({ type: 'timestamptz' })
  expire_at: Date;

  @Column({ type: 'uuid' })
  assigned_user: string;

  @Column({ type: 'json' })
  data: string;

  @Column({ type: 'integer' })
  state: number;
}

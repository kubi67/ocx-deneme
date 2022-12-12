import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'migration' })
export class Migration extends BaseEntity {
  @Column({ type: 'uuid' })
  migrateID: string;
  @Column({ type: 'character varying', length: 128 })
  name: string;
  @Column({ type: 'json' })
  setting: string;
}

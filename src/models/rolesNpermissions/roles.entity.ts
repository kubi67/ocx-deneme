import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'roles' })
export class Roles extends BaseEntity {
  @Column({ type: 'character varying', length: 128, default: null })
  name: string;
}

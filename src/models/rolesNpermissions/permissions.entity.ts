import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'permissions' })
export class Permission extends BaseEntity {
  @Column({ type: 'character varying', length: 128 })
  name: string;
}

import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'roles_description' })
export class RolesDescription extends BaseEntity {
  @Column({ type: 'uuid' })
  role_id: string;
  @Column({ type: 'uuid' })
  language_id: string;
  @Column({ type: 'character varying', length: 128 })
  name: string;

  @Column({ type: 'character varying', length: 128 })
  description: string;
}

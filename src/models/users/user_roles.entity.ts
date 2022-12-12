import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_roles' })
export class UserRoles extends BaseEntity {
  @Column({ type: 'uuid' })
  user_id: string;
  @Column({ type: 'uuid' })
  role_id: string;
  @Column({ type: 'timestamptz' })
  assigned_at: Date;
  @Column({ type: 'character varying', length: 64 })
  assigned_by: string;
}

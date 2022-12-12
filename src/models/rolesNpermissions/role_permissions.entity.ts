import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'role_permissions' })
export class RolePermissions extends BaseEntity {
  @Column({ type: 'uuid' })
  role_id: string;
  @Column({ type: 'uuid' })
  permission_id: string;
  @Column({ type: 'timestamptz' })
  assigned_at: Date;
  @Column({ type: 'uuid' })
  assigned_by: string;
}

import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_permissions' })
export class UserPermissions extends BaseEntity {
  @Column({ type: 'uuid' })
  user_id: string;
  @Column({ type: 'uuid' })
  permission_id: string;
  @Column({ type: 'timestamptz' })
  assigned_at: Date;
  @Column({ type: 'character varying', length: 64 })
  assigned_by: string;
}

// e1111442-f87c-4448-89c7-9c13aae4ddfb

// 8962e30c-0681-423e-bd73-a3c6a1fa2a5a
// 9bbf6106-7e56-49a9-8234-7e0e4766a997

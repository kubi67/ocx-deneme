import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_logins' })
export class UsersLogin extends BaseEntity {
  @Column({ type: 'uuid' })
  user_id: string;
  @Column({ type: 'character varying', length: 64 })
  ip_addr: string;
  @Column({ type: 'timestamptz' })
  last_access_at: Date;
  @Column({ type: 'character varying', length: 1000 })
  agent: string;
}

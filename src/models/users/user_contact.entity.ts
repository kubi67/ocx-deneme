import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_contact' })
export class UserContact extends BaseEntity {
  @Column({ type: 'character varying', length: 64 })
  user_id: string;

  @Column({ type: 'integer' })
  contact_type: number;

  @Column({ type: 'character varying', length: 128 })
  contact_data: number;

  @Column({ type: 'integer' })
  status: number;
}

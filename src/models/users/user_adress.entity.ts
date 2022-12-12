import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_adress' })
export class UserAddress extends BaseEntity {
  @Column({ type: 'character varying', length: 64 })
  user_id: string;

  @Column({ type: 'character varying', length: 255 })
  address: string;

  @Column({ type: 'integer' })
  country: number;

  @Column({ type: 'integer' })
  state: number;

  @Column({ type: 'integer' })
  city: number;

  @Column({ type: 'integer' })
  zip_code: number;

  @Column({ type: 'integer' })
  status: number;
}

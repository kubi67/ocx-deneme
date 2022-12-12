import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ type: 'character varying', length: 64, default: '' })
  parent_id: string; //= uuidv4();

  @Column({ type: 'character varying', length: 64 })
  username: string;

  @Column({ type: 'character varying', length: 128 })
  password: string;

  @Column({ type: 'integer' })
  status: number;

  @Column({ type: 'character varying', length: 128 })
  email: string;

  @Column({ type: 'text' })
  two_factor_secret: string;

  @Column({ type: 'text' })
  two_factor_recover_code: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  two_factor_confirmed_at: Date;

  @Column({ type: 'boolean', default: false })
  two_factor_verified: boolean;

  @Column({ type: 'uuid', default: null })
  current_broker_id: string;

  @Column({ type: 'json' })
  setting: string;

  @Column({ type: 'boolean', default: false })
  isLeadOperator: boolean;

  @Column({ type: 'boolean', default: false })
  isTrader: boolean;

  @Column({ type: 'boolean', default: false })
  isLast: boolean;

  @Column({ type: 'character varying', length: 64 })
  firstname: string;

  @Column({ type: 'character varying', length: 64 })
  lastname: string;

  @Column({ type: 'character varying', length: 255, nullable: true })
  access_token: string;
  @Column({ type: 'character varying', length: 255, nullable: true })
  refresh_token: string;
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  token_expire_at: Date;
  @Column({ type: 'boolean', default: false })
  isToken_expired: boolean;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  verified_at: Date;

  @Column({ type: 'boolean', default: false })
  isApproved: boolean;

  @Column({ type: 'uuid', default: null })
  approved_by: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  approved_at: Date;
}

import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'broker_affiliate' })
export class BrokerAffiliate extends BaseEntity {
  @Column({ type: 'uuid' })
  broker_id: string;
  @Column({ type: 'integer' })
  commission_rate: number;
  @Column({ type: 'integer' })
  tax_rate: number;
  @Column({ type: 'integer' })
  payment_method: number;
  @Column({ type: 'json' })
  payment_setting: string;
  @Column({ type: 'integer' })
  payment_period: number;
  @Column({ type: 'integer' })
  status: number;
}

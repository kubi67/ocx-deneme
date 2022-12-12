import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_broker' })
export class BrokerUser extends BaseEntity {
  @Column({ type: 'uuid' })
  broker_id: string;
  @Column({ type: 'uuid' })
  user_id: string;
  @Column({ type: 'uuid' })
  role_id: string;
}

import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'message_delivery' })
export class MessageDelivery extends BaseEntity {
  @Column({ type: 'uuid' })
  message_id: string;
  @Column({ type: 'uuid' })
  user_id: string;
  @Column({ type: 'integer' })
  content: number;
}

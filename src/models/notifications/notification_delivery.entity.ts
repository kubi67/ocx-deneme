import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'notification_delivery' })
export class NotificationDelivery extends BaseEntity {
  @Column({ type: 'uuid' })
  notification_id: string;
  @Column({ type: 'uuid' })
  user_id: string;
  @Column({ type: 'timestamptz' })
  read_at: Date;
}

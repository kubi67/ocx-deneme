import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'notifications' })
export class Notification extends BaseEntity {
  @Column({ type: 'character varying', length: 255 })
  title: string;
  @Column({ type: 'varchar', length: 255 })
  message: string;
  @Column({ type: 'integer' })
  notification_type: number;
  @Column({ type: 'integer' })
  status: number;
}

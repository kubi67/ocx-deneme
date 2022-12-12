import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'report_user' })
export class ReportUser extends BaseEntity {
  @Column({ type: 'uuid' })
  user_id: string;
  @Column({ type: 'uuid' })
  report_id: string;
}

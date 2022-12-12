import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'message_board' })
export class MessageBoard extends BaseEntity {
  @Column({ type: 'uuid' })
  author_id: string;

  @Column({ type: 'character varying', length: 255 })
  message: string;
}

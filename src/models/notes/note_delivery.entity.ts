import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'note_delivery' })
export class NoteDelivery extends BaseEntity {
  @Column({ type: 'character varying' })
  note_id: string;

  @Column({ type: 'character varying' })
  user_id: string;

  @Column({ type: 'boolean', default: false })
  delivered: boolean;
}

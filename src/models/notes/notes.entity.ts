import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'notes' })
export class Notes extends BaseEntity {
  @Column({ type: 'uuid' })
  author_id: string;

  @Column({ type: 'character varying', length: 64 })
  model_type: string;

  @Column({ type: 'uuid', default: '' })
  model_id: string;

  @Column({ type: 'character varying', length: 255 })
  note: string;

  @Column({ type: 'integer' })
  status: number;
}

import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'cc_calls' })
export class CcCalls extends BaseEntity {
  @Column({ type: 'uuid' })
  cid: string;

  @Column({ type: 'character varying', length: 18 })
  caller_number: string;

  @Column({ type: 'uuid' })
  duid: string;

  @Column({ type: 'character varying', length: 18 })
  called_number: string;

  @Column({ type: 'numeric', precision: 5, scale: 2 })
  duration: number;

  @Column({ type: 'timestamptz' })
  call_start: Date;

  @Column({ type: 'timestamptz' })
  call_end: Date;
}

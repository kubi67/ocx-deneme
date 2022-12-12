import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_states' })
export class UserStates extends BaseEntity {
  @Column({ type: 'uuid' })
  language_id: string;

  @Column({ type: 'character varying', length: 500 })
  name: string;

}

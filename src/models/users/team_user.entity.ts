import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'team_user' })
export class TeamUser extends BaseEntity {
  @Column({ type: 'uuid' })
  team_id: string;
  @Column({ type: 'uuid' })
  user_id: string;
  @Column({ type: 'uuid' })
  role_id: string;
}
// 41965ec4-7a41-46e2-b83d-bb6c856634ae

// 40d250a5-02c2-48e1-a985-2f098d95b13b
// cb1e2c92-5876-44d0-9365-17febc6d8da8

import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'ld_strategy' })
export class LdStrategy extends BaseEntity {

  @Column({type:'character varying', length:64})
  name:string;

  @Column({type:'integer'})
  priority:number;
}

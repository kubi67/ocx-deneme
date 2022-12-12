import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'brokers' })
export class Brokers extends BaseEntity {
  @Column({ type: 'character varying', length: 128 })
  name: string;
  @Column({ type: 'character varying', length: 255 })
  email: string;
  @Column({ type: 'character varying', length: 32 })
  phone: string;
  @Column({
    type: 'character varying',
    length: 255,
    default: 'https://www.market-research-companies.in//images/default.jpg',
  })
  imgUrl: string;
  @Column({ type: 'character varying', length: 255 })
  url: string;
  @Column({ type: 'boolean', default: false })
  affiliate: boolean;
  @Column({ type: 'character varying', length: 255 })
  adress: string;
  @Column({ type: 'integer' })
  country_id: number;
  @Column({ type: 'integer', default: 0 })
  city_id: number;
  @Column({ type: 'uuid', default: null })
  state_id: string;
  @Column({ type: 'integer', default: 0 })
  status: number;
  @Column({ type: 'character varying', length: 64 })
  owner_id: string;
}

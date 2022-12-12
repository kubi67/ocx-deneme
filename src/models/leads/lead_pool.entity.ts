import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'lead_pool' })
export class LeadPool extends BaseEntity {
  @Column({ type: 'uuid' })
  campaign_id: string;

  @Column({ type: 'character varying', length: 64 })
  firstname: string;

  @Column({ type: 'character varying', length: 64 })
  lastname: string;

  @Column({ type: 'character varying', length: 128 })
  email: string;

  @Column({ type: 'character varying', length: 128 })
  phone: string;

  @Column({ type: 'uuid' })
  assigned_broker: string;

  @Column({ type: 'uuid' })
  assigned_user: string;

  @Column({ type: 'uuid' })
  preference_user: string;

  @Column({ type: 'uuid' })
  source_type: string;

  @Column({ type: 'uuid' })
  source_id: string;

  @Column({ type: 'bigint' })
  state: number;
}

  
   
 

 
  
   
    
     


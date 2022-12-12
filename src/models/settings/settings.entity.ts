import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'settings' })
export class Settings extends BaseEntity {
  @Column({ type: 'uuid' })
  model_id: string;

  @Column({ type: 'character varying', length: 64 })
  model: string;

  @Column({ type: 'character varying', length: 64 })
  code: string;

  @Column({ type: 'character varying', length: 128 })
  key: string;

  @Column({ type: 'json', })
  value: string;

  @Column({ type: 'uuid' })
  created_by: string;
}

  
   
 

 
  
   
    
     


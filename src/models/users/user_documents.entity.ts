import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_documents' })
export class UserDocuments extends BaseEntity {
  @Column({ type: 'character varying', length: 64 })
  user_id: string;
  @Column({ type: 'integer' })
  document_type: number;
  @Column({ type: 'character varying', length: 500 })
  path: string;
  @Column({ type: 'boolean', default: false })
  approved: boolean;
}

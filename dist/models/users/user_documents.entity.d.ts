import { BaseEntity } from '../base.entity';
export declare class UserDocuments extends BaseEntity {
    user_id: string;
    document_type: number;
    path: string;
    approved: boolean;
}

import { BaseEntity } from '../base.entity';
export declare class Notes extends BaseEntity {
    author_id: string;
    model_type: string;
    model_id: string;
    note: string;
    status: number;
}

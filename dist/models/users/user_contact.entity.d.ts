import { BaseEntity } from '../base.entity';
export declare class UserContact extends BaseEntity {
    user_id: string;
    contact_type: number;
    contact_data: number;
    status: number;
}

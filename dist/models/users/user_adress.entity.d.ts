import { BaseEntity } from '../base.entity';
export declare class UserAddress extends BaseEntity {
    user_id: string;
    address: string;
    country: number;
    state: number;
    city: number;
    zip_code: number;
    status: number;
}

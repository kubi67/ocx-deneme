import { BaseEntity } from '../base.entity';
export declare class Brokers extends BaseEntity {
    name: string;
    email: string;
    phone: string;
    imgUrl: string;
    url: string;
    affiliate: boolean;
    adress: string;
    country_id: number;
    city_id: number;
    state_id: string;
    status: number;
    owner_id: string;
}

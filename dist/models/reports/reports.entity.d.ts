import { BaseEntity } from '../base.entity';
export declare class Reports extends BaseEntity {
    name: string;
    owner_id: string;
    data: string;
    state: number;
    type: number;
}

import { BaseEntity } from '../base.entity';
export declare class BrokerAffiliate extends BaseEntity {
    broker_id: string;
    commission_rate: number;
    tax_rate: number;
    payment_method: number;
    payment_setting: string;
    payment_period: number;
    status: number;
}

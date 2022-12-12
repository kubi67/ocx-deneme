import { BrokerAffiliate } from 'src/models/brokers/broker_affiliate.entity';
export declare class BrokerAffiliateDTO implements Readonly<BrokerAffiliateDTO> {
    id: string;
    broker_id: string;
    commission_rate: number;
    tax_rate: number;
    payment_method: number;
    payment_setting: string;
    payment_period: number;
    status: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<BrokerAffiliateDTO>): BrokerAffiliateDTO;
    static fromEntity(entity: BrokerAffiliate): BrokerAffiliateDTO;
    static toEntity(dto: Partial<BrokerAffiliateDTO>): BrokerAffiliate;
}

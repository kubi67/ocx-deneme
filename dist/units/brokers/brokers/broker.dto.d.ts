import { Brokers } from 'src/models/brokers/brokers.entity';
export declare class BrokerDTO implements Readonly<BrokerDTO> {
    id: string;
    name: string;
    email: string;
    phone: string;
    url: string;
    imgUrl: string;
    affiliate: boolean;
    address: string;
    country_id: number;
    city_id: number;
    state_id: string;
    status: number;
    owner_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<BrokerDTO>): BrokerDTO;
    static fromEntity(entity: Brokers): BrokerDTO;
    static toEntity(dto: Partial<BrokerDTO>): Brokers;
}

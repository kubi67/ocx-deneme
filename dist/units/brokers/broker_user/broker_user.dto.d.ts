import { BrokerUser } from 'src/models/brokers/broker_user.entity';
export declare class BrokerUserDTO implements Readonly<BrokerUserDTO> {
    id: string;
    broker_id: string;
    user_id: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<BrokerUserDTO>): BrokerUserDTO;
    static fromEntity(entity: BrokerUser): BrokerUserDTO;
    static toEntity(dto: Partial<BrokerUserDTO>): BrokerUser;
}

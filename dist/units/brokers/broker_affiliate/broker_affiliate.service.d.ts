import { BrokerAffiliate } from 'src/models/brokers/broker_affiliate.entity';
import { Repository } from 'typeorm';
import { BrokerAffiliateDTO } from './broker_affiliate.dto';
export declare class BrokerAffiliateService {
    private readonly repo;
    constructor(repo: Repository<BrokerAffiliate>);
    getAll(): Promise<BrokerAffiliateDTO[]>;
    getAllByStatus(status: boolean): Promise<BrokerAffiliateDTO[]>;
    getByIdMany(id: string): Promise<BrokerAffiliateDTO[]>;
    getById(id: string): Promise<BrokerAffiliateDTO>;
    create(dto: BrokerAffiliateDTO): Promise<BrokerAffiliateDTO>;
    update(id: string, dto: BrokerAffiliateDTO): Promise<BrokerAffiliateDTO>;
    changeStatus(id: string): Promise<BrokerAffiliateDTO>;
    softDelete(id: string): Promise<BrokerAffiliateDTO>;
    hardDelete(id: string): Promise<any>;
}

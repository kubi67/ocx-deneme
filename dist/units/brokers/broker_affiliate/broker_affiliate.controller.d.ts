import { BrokerAffiliateDTO } from './broker_affiliate.dto';
import { BrokerAffiliateService } from './broker_affiliate.service';
export declare class BrokerAffiliateController {
    private readonly brokerAffiliateService;
    constructor(brokerAffiliateService: BrokerAffiliateService);
    getAll(): Promise<BrokerAffiliateDTO[]>;
    getAllByStatus(status: boolean): Promise<BrokerAffiliateDTO[]>;
    get(id: string): Promise<BrokerAffiliateDTO>;
    create(dto: BrokerAffiliateDTO): Promise<BrokerAffiliateDTO>;
    update(id: string, dto: BrokerAffiliateDTO): Promise<BrokerAffiliateDTO>;
    softDelete(id: string): Promise<BrokerAffiliateDTO>;
    hardDelete(id: string): Promise<any>;
}

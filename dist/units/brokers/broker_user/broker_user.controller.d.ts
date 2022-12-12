import { BrokerUserDTO } from './broker_user.dto';
import { BrokerUserService } from './broker_user.service';
export declare class BrokerUserController {
    private readonly brokerUserService;
    constructor(brokerUserService: BrokerUserService);
    getAll(): Promise<BrokerUserDTO[]>;
    getAllByStatus(status: boolean): Promise<BrokerUserDTO[]>;
    get(id: string): Promise<BrokerUserDTO>;
    create(dto: BrokerUserDTO): Promise<BrokerUserDTO>;
    update(id: string, dto: BrokerUserDTO): Promise<BrokerUserDTO>;
    softDelete(id: string): Promise<BrokerUserDTO>;
    hardDelete(id: string): Promise<any>;
}

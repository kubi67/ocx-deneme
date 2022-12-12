import { BrokerDTO } from './broker.dto';
import { BrokersService } from './brokers.service';
export declare class BrokerController {
    private readonly brokerService;
    constructor(brokerService: BrokersService);
    getAll(): Promise<BrokerDTO[]>;
    getAllByStatus(status: boolean): Promise<BrokerDTO[]>;
    getSimpleBroker(): Promise<any>;
    getSimpleBrokerById(id: string): Promise<any>;
    getSimpleBrokerManager(): Promise<any>;
    getSimpleBrokerManagerByID(id: string): Promise<any>;
    getByOwner(id: string): Promise<any>;
    getByCountry(country: number): Promise<any>;
    getByCity(city: number): Promise<any>;
    get(id: string): Promise<BrokerDTO>;
    create(dto: BrokerDTO): Promise<BrokerDTO>;
    update(id: string, dto: BrokerDTO): Promise<BrokerDTO>;
    softDelete(id: string): Promise<BrokerDTO>;
    hardDelete(id: string): Promise<any>;
}

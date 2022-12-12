import { BrokerUser } from 'src/models/brokers/broker_user.entity';
import { Repository } from 'typeorm';
import { BrokerUserDTO } from './broker_user.dto';
export declare class BrokerUserService {
    private readonly repo;
    constructor(repo: Repository<BrokerUser>);
    getAll(): Promise<BrokerUserDTO[]>;
    getAllByStatus(status: boolean): Promise<BrokerUserDTO[]>;
    getByIdMany(id: string): Promise<BrokerUserDTO[]>;
    getById(id: string): Promise<BrokerUserDTO>;
    create(dto: BrokerUserDTO): Promise<BrokerUserDTO>;
    update(id: string, dto: BrokerUserDTO): Promise<BrokerUserDTO>;
    changeStatus(id: string): Promise<BrokerUserDTO>;
    softDelete(id: string): Promise<BrokerUserDTO>;
    hardDelete(id: string): Promise<any>;
}

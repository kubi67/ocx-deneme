import { LdStrategy } from 'src/models/deliveries/ld_strategy.entity';
import { Repository } from 'typeorm';
import { LdStrategyDTO } from './ld-strategy.dto';
export declare class LdStrategyService {
    private readonly repo;
    constructor(repo: Repository<LdStrategy>);
    getAll(): Promise<LdStrategyDTO[]>;
    getByName(name: string): Promise<LdStrategyDTO[]>;
    getByIdMany(id: string): Promise<LdStrategyDTO[]>;
    getAllByStatus(status: boolean): Promise<LdStrategyDTO[]>;
    getById(id: string): Promise<LdStrategyDTO>;
    create(dto: LdStrategyDTO): Promise<LdStrategyDTO>;
    update(id: string, dto: LdStrategyDTO): Promise<LdStrategyDTO>;
    changeStatus(id: string): Promise<LdStrategyDTO>;
    softDelete(id: string): Promise<LdStrategyDTO>;
    hardDelete(id: string): Promise<any>;
}

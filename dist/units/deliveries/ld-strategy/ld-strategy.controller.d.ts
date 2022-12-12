import { LdStrategyDTO } from './ld-strategy.dto';
import { LdStrategyService } from './ld-strategy.service';
export declare class LdStrategyController {
    private readonly ldStrategyService;
    constructor(ldStrategyService: LdStrategyService);
    getAll(): Promise<LdStrategyDTO[]>;
    getAllByStatus(status: boolean): Promise<LdStrategyDTO[]>;
    getByModelID(name: string): Promise<LdStrategyDTO[]>;
    get(id: string): Promise<LdStrategyDTO>;
    create(dto: LdStrategyDTO): Promise<LdStrategyDTO>;
    update(id: string, dto: LdStrategyDTO): Promise<LdStrategyDTO>;
    softDelete(id: string): Promise<LdStrategyDTO>;
    hardDelete(id: string): Promise<any>;
}

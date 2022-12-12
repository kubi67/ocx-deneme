import { CcCalls } from 'src/models/ccs/cc_calls.entity';
import { Repository } from 'typeorm';
import { CcCallsDTO } from './cc-calls.dto';
export declare class CcCallsService {
    private readonly repo;
    constructor(repo: Repository<CcCalls>);
    getAll(): Promise<CcCallsDTO[]>;
    getAllByStatus(status: boolean): Promise<CcCallsDTO[]>;
    getByCid(cid: string): Promise<CcCallsDTO[]>;
    getByDuid(duid: string): Promise<CcCallsDTO[]>;
    getByIdMany(id: string): Promise<CcCallsDTO[]>;
    getById(id: string): Promise<CcCallsDTO>;
    create(dto: CcCallsDTO): Promise<CcCallsDTO>;
    update(id: string, dto: CcCallsDTO): Promise<CcCallsDTO>;
    changeStatus(id: string): Promise<CcCallsDTO>;
    softDelete(id: string): Promise<CcCallsDTO>;
    hardDelete(id: string): Promise<any>;
}

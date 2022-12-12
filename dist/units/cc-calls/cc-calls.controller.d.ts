import { CcCallsDTO } from './cc-calls.dto';
import { CcCallsService } from './cc-calls.service';
export declare class CcCallsController {
    private readonly ccCallsService;
    constructor(ccCallsService: CcCallsService);
    getAll(): Promise<CcCallsDTO[]>;
    getAllByStatus(status: boolean): Promise<CcCallsDTO[]>;
    getByCid(cid: string): Promise<CcCallsDTO[]>;
    getByDuid(duid: string): Promise<CcCallsDTO[]>;
    get(id: string): Promise<CcCallsDTO>;
    create(dto: CcCallsDTO): Promise<CcCallsDTO>;
    update(id: string, dto: CcCallsDTO): Promise<CcCallsDTO>;
    softDelete(id: string): Promise<CcCallsDTO>;
    hardDelete(id: string): Promise<any>;
}

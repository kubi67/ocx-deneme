import { LdRulesDTO } from './ld-rules.dto';
import { LdRulesService } from './ld-rules.service';
export declare class LdRulesController {
    private readonly ldRulesService;
    constructor(ldRulesService: LdRulesService);
    getAll(): Promise<LdRulesDTO[]>;
    getAllByStatus(status: boolean): Promise<LdRulesDTO[]>;
    getByModelID(name: string): Promise<LdRulesDTO[]>;
    get(id: string): Promise<LdRulesDTO>;
    create(dto: LdRulesDTO): Promise<LdRulesDTO>;
    update(id: string, dto: LdRulesDTO): Promise<LdRulesDTO>;
    softDelete(id: string): Promise<LdRulesDTO>;
    hardDelete(id: string): Promise<any>;
}

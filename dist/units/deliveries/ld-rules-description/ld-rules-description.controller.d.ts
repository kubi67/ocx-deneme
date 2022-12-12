import { LdRulesDescriptionDTO } from './ld-rules-description.dto';
import { LdRulesDescriptionService } from './ld-rules-description.service';
export declare class LdRulesDescriptionController {
    private readonly ldRulesDescriptionService;
    constructor(ldRulesDescriptionService: LdRulesDescriptionService);
    getAll(): Promise<LdRulesDescriptionDTO[]>;
    getAllByStatus(status: boolean): Promise<LdRulesDescriptionDTO[]>;
    getByModelID(lang: string): Promise<LdRulesDescriptionDTO[]>;
    get(id: string): Promise<LdRulesDescriptionDTO>;
    create(dto: LdRulesDescriptionDTO): Promise<LdRulesDescriptionDTO>;
    update(id: string, dto: LdRulesDescriptionDTO): Promise<LdRulesDescriptionDTO>;
    softDelete(id: string): Promise<LdRulesDescriptionDTO>;
    hardDelete(id: string): Promise<any>;
}

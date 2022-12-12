import { RolesDTO } from './roles.dto';
import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    getAll(): Promise<RolesDTO[]>;
    getAllByStatus(status: boolean): Promise<RolesDTO[]>;
    get(id: string): Promise<RolesDTO>;
    create(dto: RolesDTO): Promise<RolesDTO>;
    update(id: string, dto: RolesDTO): Promise<RolesDTO>;
    softDelete(id: string): Promise<RolesDTO>;
    hardDelete(id: string): Promise<any>;
}

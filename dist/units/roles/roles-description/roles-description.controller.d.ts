import { RolesDescriptionDTO } from './roles-description.dto';
import { RolesDescriptionService } from './roles-description.service';
export declare class RolesDescriptionController {
    private readonly rolesDescriptionService;
    constructor(rolesDescriptionService: RolesDescriptionService);
    getAll(): Promise<RolesDescriptionDTO[]>;
    getAllByStatus(status: boolean): Promise<RolesDescriptionDTO[]>;
    getByLang(id: string): Promise<RolesDescriptionDTO[]>;
    getByRole(role: string): Promise<RolesDescriptionDTO[]>;
    get(id: string): Promise<RolesDescriptionDTO>;
    create(dto: RolesDescriptionDTO): Promise<RolesDescriptionDTO>;
    update(id: string, dto: RolesDescriptionDTO): Promise<RolesDescriptionDTO>;
    softDelete(id: string): Promise<RolesDescriptionDTO>;
    hardDelete(id: string): Promise<any>;
}

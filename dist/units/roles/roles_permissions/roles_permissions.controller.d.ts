import { RolesPermissionsDTO } from './roles_permissions.dto';
import { RolePermissionsService } from './roles_permissions.service';
export declare class RolesPermissionsController {
    private readonly rolePermissionsService;
    constructor(rolePermissionsService: RolePermissionsService);
    getAll(): Promise<RolesPermissionsDTO[]>;
    getByPerm(id: string): Promise<any>;
    getAllByStatus(status: boolean): Promise<RolesPermissionsDTO[]>;
    get(id: string): Promise<RolesPermissionsDTO>;
    create(dto: RolesPermissionsDTO): Promise<RolesPermissionsDTO>;
    update(id: string, dto: RolesPermissionsDTO): Promise<RolesPermissionsDTO>;
    softDelete(id: string): Promise<RolesPermissionsDTO>;
    hardDelete(id: string): Promise<any>;
}

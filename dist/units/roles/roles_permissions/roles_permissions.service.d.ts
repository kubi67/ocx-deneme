import { RolePermissions } from 'src/models/rolesNpermissions/role_permissions.entity';
import { PermissionsService } from 'src/units/permissions/permissions.service';
import { Repository } from 'typeorm';
import { RolesService } from '../roles/roles.service';
import { RolesPermissionsDTO } from './roles_permissions.dto';
export declare class RolePermissionsService {
    private readonly repo;
    private readonly roleService;
    private readonly permissionService;
    constructor(repo: Repository<RolePermissions>, roleService: RolesService, permissionService: PermissionsService);
    getAll(): Promise<RolesPermissionsDTO[]>;
    getAllByStatus(status: boolean): Promise<RolesPermissionsDTO[]>;
    getPermsByRole(roleID: string): Promise<RolesPermissionsDTO[]>;
    getById(id: string): Promise<RolesPermissionsDTO>;
    create(dto: RolesPermissionsDTO): Promise<RolesPermissionsDTO>;
    update(id: string, dto: RolesPermissionsDTO): Promise<RolesPermissionsDTO>;
    changeStatus(id: string): Promise<RolesPermissionsDTO>;
    softDelete(id: string): Promise<RolesPermissionsDTO>;
    hardDelete(id: string): Promise<any>;
}

import { PermissionDTO } from './permissions.dto';
import { PermissionsService } from './permissions.service';
export declare class PermissionsController {
    private readonly permissionService;
    constructor(permissionService: PermissionsService);
    getAll(): Promise<PermissionDTO[]>;
    getAllByStatus(status: boolean): Promise<PermissionDTO[]>;
    get(id: string): Promise<PermissionDTO>;
    create(dto: PermissionDTO): Promise<PermissionDTO>;
    update(id: string, dto: PermissionDTO): Promise<PermissionDTO>;
    softDelete(id: string): Promise<PermissionDTO>;
    hardDelete(id: string): Promise<any>;
}

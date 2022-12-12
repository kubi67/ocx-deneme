import { RoleUserDTO } from './role_user.dto';
import { RoleUserService } from './role_user.service';
export declare class UserRolesController {
    private readonly roleUserService;
    constructor(roleUserService: RoleUserService);
    getAll(): Promise<RoleUserDTO[]>;
    getAllByStatus(status: boolean): Promise<RoleUserDTO[]>;
    getByUser(id: string): Promise<RoleUserDTO>;
    get(id: string): Promise<RoleUserDTO>;
    create(dto: RoleUserDTO): Promise<RoleUserDTO>;
    update(id: string, dto: RoleUserDTO): Promise<RoleUserDTO>;
    softDelete(id: string): Promise<RoleUserDTO>;
    hardDelete(id: string): Promise<any>;
}

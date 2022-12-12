import { User } from 'src/models/users/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { RoleUserService } from '../role_user/role_user.service';
import { PermUserService } from '../perm_user/perm_user.service';
import { UserCreateDTO } from './user-create.dto';
import { RolePermissionsService } from 'src/units/roles/roles_permissions/roles_permissions.service';
export declare class UsersService {
    private readonly repo;
    private readonly userRoleService;
    private readonly permUserService;
    private readonly rolePermService;
    constructor(repo: Repository<User>, userRoleService: RoleUserService, permUserService: PermUserService, rolePermService: RolePermissionsService);
    getAll(): Promise<UserDTO[]>;
    getAllByStatus(status: boolean): Promise<UserDTO[]>;
    getOperators(): Promise<UserDTO[]>;
    getByIdMany(id: string): Promise<UserDTO[]>;
    getById(id: string): Promise<UserDTO>;
    getByBrokerUser(): Promise<any>;
    getByVerified(verified: boolean): Promise<UserDTO[]>;
    getTraderUser(): Promise<any>;
    getByApproved(approved: boolean): Promise<UserDTO[]>;
    create(dto: UserCreateDTO): Promise<UserDTO>;
    update(id: string, dto: UserDTO): Promise<UserDTO>;
    changeStatus(id: string): Promise<UserDTO>;
    softDelete(id: string): Promise<UserDTO>;
    hardDelete(id: string): Promise<any>;
}

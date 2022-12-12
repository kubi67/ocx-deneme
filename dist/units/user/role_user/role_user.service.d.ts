import { UserRoles } from 'src/models/users/user_roles.entity';
import { Repository } from 'typeorm';
import { RoleUserDTO } from './role_user.dto';
export declare class RoleUserService {
    private readonly repo;
    constructor(repo: Repository<UserRoles>);
    getAll(): Promise<RoleUserDTO[]>;
    getAllByStatus(status: boolean): Promise<RoleUserDTO[]>;
    getByUser(userID: string): Promise<RoleUserDTO>;
    getById(id: string): Promise<RoleUserDTO>;
    create(dto: RoleUserDTO): Promise<RoleUserDTO>;
    update(id: string, dto: RoleUserDTO): Promise<RoleUserDTO>;
    changeStatus(id: string): Promise<RoleUserDTO>;
    softDelete(id: string): Promise<RoleUserDTO>;
    hardDelete(id: string): Promise<any>;
}

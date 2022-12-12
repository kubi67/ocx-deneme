import { UserPermissions } from 'src/models/users/user_permissions.entity';
import { Repository } from 'typeorm';
import { PermUserDTO } from './perm_user.dto';
export declare class PermUserService {
    private readonly repo;
    constructor(repo: Repository<UserPermissions>);
    getAll(): Promise<PermUserDTO[]>;
    getAllByStatus(status: boolean): Promise<PermUserDTO[]>;
    getByUser(userID: string): Promise<PermUserDTO[]>;
    getById(id: string): Promise<PermUserDTO>;
    create(dto: PermUserDTO): Promise<PermUserDTO>;
    update(id: string, dto: PermUserDTO): Promise<PermUserDTO>;
    changeStatus(id: string): Promise<PermUserDTO>;
    softDelete(id: string): Promise<PermUserDTO>;
    hardDelete(id: string): Promise<any>;
}

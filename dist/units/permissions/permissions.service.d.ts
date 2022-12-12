import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Repository } from 'typeorm';
import { PermissionDTO } from './permissions.dto';
export declare class PermissionsService {
    private readonly repo;
    constructor(repo: Repository<Permission>);
    getAll(): Promise<PermissionDTO[]>;
    getAllByStatus(status: boolean): Promise<PermissionDTO[]>;
    getByIdMany(id: string): Promise<PermissionDTO[]>;
    getById(id: string): Promise<PermissionDTO>;
    create(dto: PermissionDTO): Promise<PermissionDTO>;
    update(id: string, dto: PermissionDTO): Promise<PermissionDTO>;
    changeStatus(id: string): Promise<PermissionDTO>;
    softDelete(id: string): Promise<PermissionDTO>;
    hardDelete(id: string): Promise<any>;
}

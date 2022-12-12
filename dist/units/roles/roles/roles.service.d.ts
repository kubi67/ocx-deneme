import { Roles } from 'src/models/rolesNpermissions/roles.entity';
import { Repository } from 'typeorm';
import { RolesDTO } from './roles.dto';
export declare class RolesService {
    private readonly repo;
    constructor(repo: Repository<Roles>);
    getAll(): Promise<RolesDTO[]>;
    getByIdMany(id: string): Promise<RolesDTO[]>;
    getAllByStatus(status: boolean): Promise<RolesDTO[]>;
    getById(id: string): Promise<RolesDTO>;
    create(dto: RolesDTO): Promise<RolesDTO>;
    update(id: string, dto: RolesDTO): Promise<RolesDTO>;
    changeStatus(id: string): Promise<RolesDTO>;
    softDelete(id: string): Promise<RolesDTO>;
    hardDelete(id: string): Promise<any>;
}

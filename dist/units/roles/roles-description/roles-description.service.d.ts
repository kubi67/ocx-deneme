import { RolesDescription } from 'src/models/rolesNpermissions/roles_description.entity';
import { Repository } from 'typeorm';
import { RolesDescriptionDTO } from './roles-description.dto';
export declare class RolesDescriptionService {
    private readonly repo;
    constructor(repo: Repository<RolesDescription>);
    getAll(): Promise<RolesDescriptionDTO[]>;
    getByRole(roleID: string): Promise<RolesDescriptionDTO[]>;
    getByRoleOne(roleID: string): Promise<RolesDescriptionDTO>;
    getByLang(languageID: string): Promise<RolesDescriptionDTO[]>;
    getByIdMany(id: string): Promise<RolesDescriptionDTO[]>;
    getAllByStatus(status: boolean): Promise<RolesDescriptionDTO[]>;
    getById(id: string): Promise<RolesDescriptionDTO>;
    create(dto: RolesDescriptionDTO): Promise<RolesDescriptionDTO>;
    update(id: string, dto: RolesDescriptionDTO): Promise<RolesDescriptionDTO>;
    changeStatus(id: string): Promise<RolesDescriptionDTO>;
    softDelete(id: string): Promise<RolesDescriptionDTO>;
    hardDelete(id: string): Promise<any>;
}

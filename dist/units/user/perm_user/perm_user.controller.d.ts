import { PermUserDTO } from './perm_user.dto';
import { PermUserService } from './perm_user.service';
export declare class UserPermController {
    private readonly permUserService;
    constructor(permUserService: PermUserService);
    getAll(): Promise<PermUserDTO[]>;
    getAllByStatus(status: boolean): Promise<PermUserDTO[]>;
    getByUser(id: string): Promise<PermUserDTO[]>;
    get(id: string): Promise<PermUserDTO>;
    create(dto: PermUserDTO): Promise<PermUserDTO>;
    update(id: string, dto: PermUserDTO): Promise<PermUserDTO>;
    softDelete(id: string): Promise<PermUserDTO>;
    hardDelete(id: string): Promise<any>;
}

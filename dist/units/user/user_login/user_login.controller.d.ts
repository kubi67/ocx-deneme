import { UserLoginDTO } from './user_login.dto';
import { UserLoginService } from './user_login.service';
export declare class UserLoginController {
    private readonly userLoginService;
    constructor(userLoginService: UserLoginService);
    getAll(): Promise<UserLoginDTO[]>;
    getAllByStatus(status: boolean): Promise<UserLoginDTO[]>;
    get(id: string): Promise<UserLoginDTO>;
    create(dto: UserLoginDTO): Promise<UserLoginDTO>;
    update(id: string, dto: UserLoginDTO): Promise<UserLoginDTO>;
    softDelete(id: string): Promise<UserLoginDTO>;
    hardDelete(id: string): Promise<any>;
}

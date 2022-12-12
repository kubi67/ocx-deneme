import { UsersLogin } from 'src/models/users/user_login.entity';
import { Repository } from 'typeorm';
import { UserLoginDTO } from './user_login.dto';
export declare class UserLoginService {
    private readonly repo;
    constructor(repo: Repository<UsersLogin>);
    getAll(): Promise<UserLoginDTO[]>;
    getAllByStatus(status: boolean): Promise<UserLoginDTO[]>;
    getByIdMany(id: string): Promise<UserLoginDTO[]>;
    getByUserId(id: string): Promise<UserLoginDTO[]>;
    getById(id: string): Promise<UserLoginDTO>;
    create(dto: UserLoginDTO): Promise<UserLoginDTO>;
    update(id: string, dto: UserLoginDTO): Promise<UserLoginDTO>;
    changeStatus(id: string): Promise<UserLoginDTO>;
    softDelete(id: string): Promise<UserLoginDTO>;
    hardDelete(id: string): Promise<any>;
}

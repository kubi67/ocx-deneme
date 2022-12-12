import { HttpService } from '@nestjs/axios';
import { UserCreateDTO } from './user-create.dto';
import { UserDTO } from './user.dto';
import { UsersService } from './user.service';
export declare class UserController {
    private readonly userService;
    private readonly httpService;
    constructor(userService: UsersService, httpService: HttpService);
    getAll(): Promise<UserDTO[]>;
    getAllMock(): Promise<UserDTO[]>;
    getTraderUser(): Promise<any>;
    getOperators(): Promise<UserDTO[]>;
    getAllByStatus(status: boolean): Promise<UserDTO[]>;
    getAllByVerified(verified: boolean): Promise<UserDTO[]>;
    getAllByApproved(approved: boolean): Promise<UserDTO[]>;
    get(id: string): Promise<UserDTO>;
    create(dto: UserCreateDTO): Promise<UserDTO>;
    update(id: string, dto: UserDTO): Promise<UserDTO>;
    softDelete(id: string): Promise<UserDTO>;
    hardDelete(id: string): Promise<any>;
}

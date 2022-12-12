import { UserAdressDTO } from './user_adress.dto';
import { UserAdressService } from './user_adress.service';
export declare class UserAdressController {
    private readonly userAdressService;
    constructor(userAdressService: UserAdressService);
    getAll(): Promise<UserAdressDTO[]>;
    getAllByStatus(status: boolean): Promise<UserAdressDTO[]>;
    get(id: string): Promise<UserAdressDTO>;
    create(dto: UserAdressDTO): Promise<UserAdressDTO>;
    update(id: string, dto: UserAdressDTO): Promise<UserAdressDTO>;
    softDelete(id: string): Promise<UserAdressDTO>;
    hardDelete(id: string): Promise<any>;
}

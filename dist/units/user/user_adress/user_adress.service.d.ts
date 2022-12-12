import { UserAddress } from 'src/models/users/user_adress.entity';
import { Repository } from 'typeorm';
import { UserAdressDTO } from './user_adress.dto';
export declare class UserAdressService {
    private readonly repo;
    constructor(repo: Repository<UserAddress>);
    getAll(): Promise<UserAdressDTO[]>;
    getAllByStatus(status: boolean): Promise<UserAdressDTO[]>;
    getByIdMany(id: string): Promise<UserAdressDTO[]>;
    getById(id: string): Promise<UserAdressDTO>;
    create(dto: UserAdressDTO): Promise<UserAdressDTO>;
    update(id: string, dto: UserAdressDTO): Promise<UserAdressDTO>;
    changeStatus(id: string): Promise<UserAdressDTO>;
    softDelete(id: string): Promise<UserAdressDTO>;
    hardDelete(id: string): Promise<any>;
}

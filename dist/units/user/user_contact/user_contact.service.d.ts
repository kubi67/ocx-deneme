import { UserContact } from 'src/models/users/user_contact.entity';
import { Repository } from 'typeorm';
import { UserContactDTO } from './user_contact.dto';
export declare class UserContactService {
    private readonly repo;
    constructor(repo: Repository<UserContact>);
    getAll(): Promise<UserContactDTO[]>;
    getAllByStatus(status: boolean): Promise<UserContactDTO[]>;
    getByIdMany(id: string): Promise<UserContactDTO[]>;
    getById(id: string): Promise<UserContactDTO>;
    create(dto: UserContactDTO): Promise<UserContactDTO>;
    update(id: string, dto: UserContactDTO): Promise<UserContactDTO>;
    changeStatus(id: string): Promise<UserContactDTO>;
    softDelete(id: string): Promise<UserContactDTO>;
    hardDelete(id: string): Promise<any>;
}

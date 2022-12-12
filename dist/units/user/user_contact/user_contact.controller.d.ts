import { UserContactDTO } from './user_contact.dto';
import { UserContactService } from './user_contact.service';
export declare class UserContactController {
    private readonly userContactService;
    constructor(userContactService: UserContactService);
    getAll(): Promise<UserContactDTO[]>;
    getAllByStatus(status: boolean): Promise<UserContactDTO[]>;
    get(id: string): Promise<UserContactDTO>;
    create(dto: UserContactDTO): Promise<UserContactDTO>;
    update(id: string, dto: UserContactDTO): Promise<UserContactDTO>;
    softDelete(id: string): Promise<UserContactDTO>;
    hardDelete(id: string): Promise<any>;
}

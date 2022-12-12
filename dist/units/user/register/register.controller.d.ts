import { RegisterUsersDTO } from './register.dto';
import { RegisterService } from './register.service';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    create(dto: RegisterUsersDTO): Promise<RegisterUsersDTO>;
    createUser(dto: RegisterUsersDTO): Promise<RegisterUsersDTO>;
}

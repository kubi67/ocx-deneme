import { User } from 'src/models/users/user.entity';
import { Repository } from 'typeorm';
import { RegisterUsersDTO } from './register.dto';
import { SendMailService } from 'src/scripts/mailer-scripts/mailer.service';
export declare class RegisterService {
    private readonly repo;
    private mailService;
    constructor(repo: Repository<User>, mailService: SendMailService);
    register(dto: RegisterUsersDTO): Promise<RegisterUsersDTO>;
    registerUser(dto: RegisterUsersDTO): Promise<RegisterUsersDTO>;
}

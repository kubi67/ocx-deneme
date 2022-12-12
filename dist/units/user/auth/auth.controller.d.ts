import { LoginUsersDTO } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getProfile(): string;
    create(dto: LoginUsersDTO, request: any): Promise<LoginUsersDTO>;
}

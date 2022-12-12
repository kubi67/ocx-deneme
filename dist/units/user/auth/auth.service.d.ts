import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/users/user.entity';
import { Repository } from 'typeorm';
import { LoginUsersDTO } from './auth.dto';
import { RoleUserService } from '../role_user/role_user.service';
import { PermUserService } from '../perm_user/perm_user.service';
import { RolesService } from 'src/units/roles/roles/roles.service';
import { PermissionsService } from 'src/units/permissions/permissions.service';
import { UsersService } from '../user/user.service';
import { RolesDescriptionService } from 'src/units/roles/roles-description/roles-description.service';
import { UserLoginService } from '../user_login/user_login.service';
export declare class AuthService {
    private readonly repo;
    private readonly jwtService;
    private readonly roleUserService;
    private readonly permUserService;
    private readonly roleService;
    private readonly permService;
    private readonly userService;
    private readonly roleDescriptionService;
    private readonly userLoginService;
    constructor(repo: Repository<User>, jwtService: JwtService, roleUserService: RoleUserService, permUserService: PermUserService, roleService: RolesService, permService: PermissionsService, userService: UsersService, roleDescriptionService: RolesDescriptionService, userLoginService: UserLoginService);
    auth(dto: LoginUsersDTO, headers: {
        'user-agent': string;
        ip: string;
    }, ip: string): Promise<any>;
}

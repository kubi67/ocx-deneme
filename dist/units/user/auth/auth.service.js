"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../models/users/user.entity");
const typeorm_2 = require("typeorm");
const auth_dto_1 = require("./auth.dto");
const bcrypt = require("bcrypt");
const role_user_service_1 = require("../role_user/role_user.service");
const perm_user_service_1 = require("../perm_user/perm_user.service");
const roles_service_1 = require("../../roles/roles/roles.service");
const permissions_service_1 = require("../../permissions/permissions.service");
const user_service_1 = require("../user/user.service");
const roles_description_service_1 = require("../../roles/roles-description/roles-description.service");
const user_login_service_1 = require("../user_login/user_login.service");
let AuthService = class AuthService {
    constructor(repo, jwtService, roleUserService, permUserService, roleService, permService, userService, roleDescriptionService, userLoginService) {
        this.repo = repo;
        this.jwtService = jwtService;
        this.roleUserService = roleUserService;
        this.permUserService = permUserService;
        this.roleService = roleService;
        this.permService = permService;
        this.userService = userService;
        this.roleDescriptionService = roleDescriptionService;
        this.userLoginService = userLoginService;
    }
    async auth(dto, headers, ip) {
        if (dto.email) {
            const getUser = await this.repo
                .findOne({ where: { email: dto.email } })
                .then((datas) => auth_dto_1.LoginUsersDTO.fromEntity(datas));
            if (!getUser) {
                return new common_1.UnauthorizedException(null, 'Unauthorized. Check your mail or username.');
            }
            const checkApprove = await this.userService.getById(getUser.id);
            if (!checkApprove.isApproved || !checkApprove.isVerified) {
                return new common_1.UnauthorizedException(null, 'User not approved');
            }
            const isMatch = await bcrypt.compare(dto.password, getUser.password);
            if (!isMatch) {
                return new common_1.UnauthorizedException(null, 'Wrong password.');
            }
            const userProfile = await this.repo.findOne({
                where: { id: getUser.id },
            });
            await this.userLoginService.create({
                id: userProfile.id,
                user_id: userProfile.id,
                ip_addr: `${ip}`,
                last_access_at: new Date(),
                agent: `${headers['user-agent']}`,
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: new Date(),
                lastChangedDateTime: new Date(),
                isDeleted: false,
            });
            const userRoles = await this.roleUserService.getByUser(getUser.id);
            const userPermissions = await this.permUserService.getByUser(getUser.id);
            const permUser = [];
            const permPages = [];
            const roleUser = await this.roleDescriptionService.getByRole(userRoles.role_id);
            for (let index = 0; index < userPermissions.length; index++) {
                permUser.push(await (await this.permService.getById(userPermissions[index].permission_id)).name);
                permPages.push(await (await this.permService.getById(userPermissions[index].permission_id)).name.replace('.', '-'));
            }
            const payload = { user: getUser };
            return {
                access_token: this.jwtService.sign(payload),
                user: userProfile,
                roles: roleUser,
                permissions: permUser,
                permPages,
            };
        }
        if (dto.username) {
            const getUser = await this.repo
                .findOne({ where: { email: dto.email } })
                .then((datas) => auth_dto_1.LoginUsersDTO.fromEntity(datas));
            if (!getUser) {
                return new common_1.UnauthorizedException(null, 'Unauthorized. Check your mail or username.');
            }
            const isMatch = await bcrypt.compare(dto.password, getUser.password);
            if (!isMatch) {
                return new common_1.UnauthorizedException(null, 'Wrong password.');
            }
            const checkApprove = await this.userService.getById(getUser.id);
            if (!checkApprove.isApproved || !checkApprove.isVerified) {
                return new common_1.UnauthorizedException(null, 'User not approved');
            }
            const userProfile = await this.repo.findOne({
                where: { id: getUser.id },
            });
            await this.userLoginService.create({
                id: userProfile.id,
                user_id: userProfile.id,
                ip_addr: `${ip}`,
                last_access_at: new Date(),
                agent: `${headers['user-agent']}`,
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: new Date(),
                lastChangedDateTime: new Date(),
                isDeleted: false,
            });
            const userRoles = await this.roleUserService.getByUser(getUser.id);
            const userPermissions = await this.permUserService.getByUser(getUser.id);
            const roleUser = [];
            const permUser = [];
            roleUser.push(await (await this.roleDescriptionService.getByRoleOne(userRoles.role_id)).name);
            for (let index = 0; index < userPermissions.length; index++) {
                permUser.push(await (await this.permService.getById(userPermissions[index].permission_id)).name);
            }
            console.log(roleUser);
            const payload = { user: getUser };
            return {
                access_token: this.jwtService.sign(payload),
                user: userProfile,
                roles: roleUser,
                permissions: permUser,
            };
        }
        return new common_1.UnauthorizedException(null, 'Username or mail is required');
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        role_user_service_1.RoleUserService,
        perm_user_service_1.PermUserService,
        roles_service_1.RolesService,
        permissions_service_1.PermissionsService,
        user_service_1.UsersService,
        roles_description_service_1.RolesDescriptionService,
        user_login_service_1.UserLoginService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
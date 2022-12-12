"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../models/users/user.entity");
const permissions_module_1 = require("../../permissions/permissions.module");
const roles_description_module_1 = require("../../roles/roles-description/roles-description.module");
const roles_module_1 = require("../../roles/roles/roles.module");
const roles_permissions_module_1 = require("../../roles/roles_permissions/roles_permissions.module");
const perm_user_module_1 = require("../perm_user/perm_user.module");
const role_user_module_1 = require("../role_user/role_user.module");
const user_module_1 = require("../user/user.module");
const user_login_module_1 = require("../user_login/user_login.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./jwt.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'secretKey',
                signOptions: { expiresIn: '60s' },
            }),
            user_module_1.UserModule,
            user_login_module_1.UserLoginModule,
            role_user_module_1.RoleUserModule,
            perm_user_module_1.PermUserModule,
            roles_module_1.RolesModule,
            roles_permissions_module_1.RolePermissionsModule,
            permissions_module_1.PermissionsModule,
            roles_description_module_1.RolesDescriptionModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
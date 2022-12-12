"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLayerModule = void 0;
const common_1 = require("@nestjs/common");
const role_user_module_1 = require("./role_user/role_user.module");
const team_user_module_1 = require("./team_user/team_user.module");
const user_module_1 = require("./user/user.module");
const user_service_1 = require("./user/user.service");
let UserLayerModule = class UserLayerModule {
};
UserLayerModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, team_user_module_1.TeamUserModule, role_user_module_1.RoleUserModule],
        providers: [user_service_1.UsersService],
        controllers: [],
        exports: [],
    })
], UserLayerModule);
exports.UserLayerModule = UserLayerModule;
//# sourceMappingURL=user_layer.module.js.map
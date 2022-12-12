"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_permissions_entity_1 = require("../../../models/rolesNpermissions/role_permissions.entity");
const permissions_module_1 = require("../../permissions/permissions.module");
const roles_module_1 = require("../roles/roles.module");
const roles_permissions_controller_1 = require("./roles_permissions.controller");
const roles_permissions_service_1 = require("./roles_permissions.service");
let RolePermissionsModule = class RolePermissionsModule {
};
RolePermissionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([role_permissions_entity_1.RolePermissions]),
            permissions_module_1.PermissionsModule,
            roles_module_1.RolesModule,
        ],
        providers: [roles_permissions_service_1.RolePermissionsService],
        controllers: [roles_permissions_controller_1.RolesPermissionsController],
        exports: [roles_permissions_service_1.RolePermissionsService],
    })
], RolePermissionsModule);
exports.RolePermissionsModule = RolePermissionsModule;
//# sourceMappingURL=roles_permissions.module.js.map
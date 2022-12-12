"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const leads_entity_1 = require("../../../models/leads/leads.entity");
const roles_description_module_1 = require("../../roles/roles-description/roles-description.module");
const roles_module_1 = require("../../roles/roles/roles.module");
const role_user_module_1 = require("../../user/role_user/role_user.module");
const user_module_1 = require("../../user/user/user.module");
const leads_controller_1 = require("./leads.controller");
const leads_service_1 = require("./leads.service");
let LeadsModule = class LeadsModule {
};
LeadsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([leads_entity_1.Leads]),
            user_module_1.UserModule,
            roles_module_1.RolesModule,
            role_user_module_1.RoleUserModule,
            roles_description_module_1.RolesDescriptionModule
        ],
        controllers: [leads_controller_1.LeadsController],
        providers: [leads_service_1.LeadsService],
        exports: [leads_service_1.LeadsService],
    })
], LeadsModule);
exports.LeadsModule = LeadsModule;
//# sourceMappingURL=leads.module.js.map
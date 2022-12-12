"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesDescriptionModule = void 0;
const common_1 = require("@nestjs/common");
const roles_description_service_1 = require("./roles-description.service");
const roles_description_controller_1 = require("./roles-description.controller");
const typeorm_1 = require("@nestjs/typeorm");
const roles_description_entity_1 = require("../../../models/rolesNpermissions/roles_description.entity");
let RolesDescriptionModule = class RolesDescriptionModule {
};
RolesDescriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([roles_description_entity_1.RolesDescription])],
        providers: [roles_description_service_1.RolesDescriptionService],
        controllers: [roles_description_controller_1.RolesDescriptionController],
        exports: [roles_description_service_1.RolesDescriptionService]
    })
], RolesDescriptionModule);
exports.RolesDescriptionModule = RolesDescriptionModule;
//# sourceMappingURL=roles-description.module.js.map
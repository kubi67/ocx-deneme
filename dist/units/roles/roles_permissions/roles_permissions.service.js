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
exports.RolePermissionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_permissions_entity_1 = require("../../../models/rolesNpermissions/role_permissions.entity");
const permissions_service_1 = require("../../permissions/permissions.service");
const typeorm_2 = require("typeorm");
const roles_service_1 = require("../roles/roles.service");
const roles_permissions_dto_1 = require("./roles_permissions.dto");
let RolePermissionsService = class RolePermissionsService {
    constructor(repo, roleService, permissionService) {
        this.repo = repo;
        this.roleService = roleService;
        this.permissionService = permissionService;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => roles_permissions_dto_1.RolesPermissionsDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => roles_permissions_dto_1.RolesPermissionsDTO.fromEntity(e)));
    }
    async getPermsByRole(roleID) {
        return await this.repo
            .find({ where: { role_id: roleID } })
            .then((datas) => datas.map((e) => roles_permissions_dto_1.RolesPermissionsDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => roles_permissions_dto_1.RolesPermissionsDTO.fromEntity(datas));
    }
    async create(dto) {
        return await this.repo
            .save(roles_permissions_dto_1.RolesPermissionsDTO.toEntity(dto))
            .then((e) => roles_permissions_dto_1.RolesPermissionsDTO.fromEntity(e));
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = roles_permissions_dto_1.RolesPermissionsDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async changeStatus(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = !findData.isDeleted;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = roles_permissions_dto_1.RolesPermissionsDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = roles_permissions_dto_1.RolesPermissionsDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
RolePermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_permissions_entity_1.RolePermissions)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        roles_service_1.RolesService,
        permissions_service_1.PermissionsService])
], RolePermissionsService);
exports.RolePermissionsService = RolePermissionsService;
//# sourceMappingURL=roles_permissions.service.js.map
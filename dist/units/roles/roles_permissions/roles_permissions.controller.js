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
exports.RolesPermissionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const roles_permissions_dto_1 = require("./roles_permissions.dto");
const roles_permissions_service_1 = require("./roles_permissions.service");
let RolesPermissionsController = class RolesPermissionsController {
    constructor(rolePermissionsService) {
        this.rolePermissionsService = rolePermissionsService;
    }
    async getAll() {
        return await this.rolePermissionsService.getAll();
    }
    async getByPerm(id) {
        return await this.rolePermissionsService.getPermsByRole(id);
    }
    async getAllByStatus(status) {
        return await this.rolePermissionsService.getAllByStatus(status);
    }
    async get(id) {
        return await this.rolePermissionsService.getById(id);
    }
    async create(dto) {
        return await this.rolePermissionsService.create(dto);
    }
    async update(id, dto) {
        return await this.rolePermissionsService.update(id, dto);
    }
    async softDelete(id) {
        return await this.rolePermissionsService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.rolePermissionsService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesPermissionsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesPermissionsController.prototype, "getByPerm", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], RolesPermissionsController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesPermissionsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [roles_permissions_dto_1.RolesPermissionsDTO]),
    __metadata("design:returntype", Promise)
], RolesPermissionsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, roles_permissions_dto_1.RolesPermissionsDTO]),
    __metadata("design:returntype", Promise)
], RolesPermissionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesPermissionsController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesPermissionsController.prototype, "hardDelete", null);
RolesPermissionsController = __decorate([
    (0, common_1.Controller)('roles-permissions'),
    (0, swagger_1.ApiTags)('Roles and Permissions Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [roles_permissions_service_1.RolePermissionsService])
], RolesPermissionsController);
exports.RolesPermissionsController = RolesPermissionsController;
//# sourceMappingURL=roles_permissions.controller.js.map
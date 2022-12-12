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
exports.UserRolesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const role_user_dto_1 = require("./role_user.dto");
const role_user_service_1 = require("./role_user.service");
let UserRolesController = class UserRolesController {
    constructor(roleUserService) {
        this.roleUserService = roleUserService;
    }
    async getAll() {
        return await this.roleUserService.getAll();
    }
    async getAllByStatus(status) {
        return await this.roleUserService.getAllByStatus(status);
    }
    async getByUser(id) {
        return await this.roleUserService.getByUser(id);
    }
    async get(id) {
        return await this.roleUserService.getById(id);
    }
    async create(dto) {
        return await this.roleUserService.create(dto);
    }
    async update(id, dto) {
        return await this.roleUserService.update(id, dto);
    }
    async softDelete(id) {
        return await this.roleUserService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.roleUserService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserRolesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], UserRolesController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/get-by-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserRolesController.prototype, "getByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserRolesController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_user_dto_1.RoleUserDTO]),
    __metadata("design:returntype", Promise)
], UserRolesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, role_user_dto_1.RoleUserDTO]),
    __metadata("design:returntype", Promise)
], UserRolesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserRolesController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserRolesController.prototype, "hardDelete", null);
UserRolesController = __decorate([
    (0, common_1.Controller)('user-roles'),
    (0, swagger_1.ApiTags)('User Roles Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [role_user_service_1.RoleUserService])
], UserRolesController);
exports.UserRolesController = UserRolesController;
//# sourceMappingURL=role_user.controller.js.map
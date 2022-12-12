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
exports.UserLoginController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const user_login_dto_1 = require("./user_login.dto");
const user_login_service_1 = require("./user_login.service");
let UserLoginController = class UserLoginController {
    constructor(userLoginService) {
        this.userLoginService = userLoginService;
    }
    async getAll() {
        return await this.userLoginService.getAll();
    }
    async getAllByStatus(status) {
        return await this.userLoginService.getAllByStatus(status);
    }
    async get(id) {
        return await this.userLoginService.getById(id);
    }
    async create(dto) {
        return await this.userLoginService.create(dto);
    }
    async update(id, dto) {
        return await this.userLoginService.update(id, dto);
    }
    async softDelete(id) {
        return await this.userLoginService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.userLoginService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDTO]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_login_dto_1.UserLoginDTO]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "hardDelete", null);
UserLoginController = __decorate([
    (0, common_1.Controller)('user-login'),
    (0, swagger_1.ApiTags)('User Login Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [user_login_service_1.UserLoginService])
], UserLoginController);
exports.UserLoginController = UserLoginController;
//# sourceMappingURL=user_login.controller.js.map
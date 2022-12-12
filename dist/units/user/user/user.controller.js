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
exports.UserController = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const user_create_dto_1 = require("./user-create.dto");
const user_dto_1 = require("./user.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService, httpService) {
        this.userService = userService;
        this.httpService = httpService;
    }
    async getAll() {
        return await this.userService.getAll();
    }
    async getAllMock() {
        return await this.userService.getAll();
    }
    async getTraderUser() {
        return await this.userService.getTraderUser();
    }
    async getOperators() {
        return await this.userService.getOperators();
    }
    async getAllByStatus(status) {
        return await this.userService.getAllByStatus(status);
    }
    async getAllByVerified(verified) {
        return await this.userService.getByVerified(verified);
    }
    async getAllByApproved(approved) {
        return await this.userService.getByApproved(approved);
    }
    async get(id) {
        return await this.userService.getById(id);
    }
    async create(dto) {
        return await this.userService.create(dto);
    }
    async update(id, dto) {
        return await this.userService.update(id, dto);
    }
    async softDelete(id) {
        return await this.userService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.userService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/mock'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllMock", null);
__decorate([
    (0, common_1.Get)('/trader-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getTraderUser", null);
__decorate([
    (0, common_1.Get)('/get-operators/:data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOperators", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-verified/:verified'),
    __param(0, (0, common_1.Param)('verified')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllByVerified", null);
__decorate([
    (0, common_1.Get)('/by-approved/:approved'),
    __param(0, (0, common_1.Param)('approved')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllByApproved", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_dto_1.UserCreateDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "hardDelete", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('User Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        axios_1.HttpService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
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
exports.UserPerformanceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const user_performance_dto_1 = require("./user_performance.dto");
const user_performance_service_1 = require("./user_performance.service");
let UserPerformanceController = class UserPerformanceController {
    constructor(userPerformanceService) {
        this.userPerformanceService = userPerformanceService;
    }
    async getAll() {
        return await this.userPerformanceService.getAll();
    }
    async getAllByStatus(status) {
        return await this.userPerformanceService.getAllByStatus(status);
    }
    async getAllByAssigned(assigned) {
        return await this.userPerformanceService.getByAssignedBy(assigned);
    }
    async getAllByUser(userID) {
        return await this.userPerformanceService.getByUser(userID);
    }
    async get(id) {
        return await this.userPerformanceService.getById(id);
    }
    async create(dto) {
        return await this.userPerformanceService.create(dto);
    }
    async update(id, dto) {
        return await this.userPerformanceService.update(id, dto);
    }
    async softDelete(id) {
        return await this.userPerformanceService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.userPerformanceService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserPerformanceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], UserPerformanceController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-assigned/:assigned'),
    __param(0, (0, common_1.Param)('assigned')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPerformanceController.prototype, "getAllByAssigned", null);
__decorate([
    (0, common_1.Get)('/by-user/:userID'),
    __param(0, (0, common_1.Param)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPerformanceController.prototype, "getAllByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPerformanceController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_performance_dto_1.UserPerformanceDTO]),
    __metadata("design:returntype", Promise)
], UserPerformanceController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_performance_dto_1.UserPerformanceDTO]),
    __metadata("design:returntype", Promise)
], UserPerformanceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPerformanceController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPerformanceController.prototype, "hardDelete", null);
UserPerformanceController = __decorate([
    (0, common_1.Controller)('user-performances'),
    (0, swagger_1.ApiTags)('User Performances Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [user_performance_service_1.UserPerformanceService])
], UserPerformanceController);
exports.UserPerformanceController = UserPerformanceController;
//# sourceMappingURL=user_performance.controller.js.map
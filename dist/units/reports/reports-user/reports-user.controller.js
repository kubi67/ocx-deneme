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
exports.ReportsUserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const reports_user_dto_1 = require("./reports-user.dto");
const reports_user_service_1 = require("./reports-user.service");
let ReportsUserController = class ReportsUserController {
    constructor(reportUserService) {
        this.reportUserService = reportUserService;
    }
    async getAll() {
        return await this.reportUserService.getAll();
    }
    async getAllByStatus(status) {
        return await this.reportUserService.getAllByStatus(status);
    }
    async get(id) {
        return await this.reportUserService.getById(id);
    }
    async getLeadsFull() {
        return await this.reportUserService.getAllWithAll();
    }
    async getByOwner(id) {
        return await this.reportUserService.getByUser(id);
    }
    async getByReport(id) {
        return await this.reportUserService.getByReport(id);
    }
    async create(dto) {
        return await this.reportUserService.create(dto);
    }
    async update(id, dto) {
        return await this.reportUserService.update(id, dto);
    }
    async softDelete(id) {
        return await this.reportUserService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.reportUserService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/active-leads/:status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "getLeadsFull", null);
__decorate([
    (0, common_1.Get)('/by-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "getByOwner", null);
__decorate([
    (0, common_1.Get)('/by-report/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "getByReport", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reports_user_dto_1.ReportsUserDTO]),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reports_user_dto_1.ReportsUserDTO]),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsUserController.prototype, "hardDelete", null);
ReportsUserController = __decorate([
    (0, common_1.Controller)('report-user'),
    (0, swagger_1.ApiTags)('Report User Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [reports_user_service_1.ReportsUserService])
], ReportsUserController);
exports.ReportsUserController = ReportsUserController;
//# sourceMappingURL=reports-user.controller.js.map
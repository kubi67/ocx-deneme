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
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const reports_dto_1 = require("./reports.dto");
const reports_service_1 = require("./reports.service");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async getAll() {
        return await this.reportsService.getAll();
    }
    async getAllByStatus(status) {
        return await this.reportsService.getAllByStatus(status);
    }
    async get(id) {
        return await this.reportsService.getById(id);
    }
    async getLeadsFull() {
        return await this.reportsService.getAllWithAll();
    }
    async getByOwner(id) {
        return await this.reportsService.getByOwner(id);
    }
    async getByState(state) {
        return await this.reportsService.getByState(state);
    }
    async create(dto) {
        return await this.reportsService.create(dto);
    }
    async update(id, dto) {
        return await this.reportsService.update(id, dto);
    }
    async softDelete(id) {
        return await this.reportsService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.reportsService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/active-leads/:status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getLeadsFull", null);
__decorate([
    (0, common_1.Get)('/by-owner/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getByOwner", null);
__decorate([
    (0, common_1.Get)('/by-state/:state'),
    __param(0, (0, common_1.Param)('state')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getByState", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reports_dto_1.ReportsDTO]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reports_dto_1.ReportsDTO]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "hardDelete", null);
ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    (0, swagger_1.ApiTags)('Reports Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
exports.ReportsController = ReportsController;
//# sourceMappingURL=reports.controller.js.map
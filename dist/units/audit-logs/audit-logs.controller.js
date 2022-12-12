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
exports.AuditLogsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../libs/api-results/standart-results");
const audit_logs_dto_1 = require("./audit-logs.dto");
const audit_logs_service_1 = require("./audit-logs.service");
let AuditLogsController = class AuditLogsController {
    constructor(auditLogService) {
        this.auditLogService = auditLogService;
    }
    async getAll() {
        return await this.auditLogService.getAll();
    }
    async getAllByStatus(status) {
        return await this.auditLogService.getAllByStatus(status);
    }
    async getByUser(id) {
        return await this.auditLogService.getByUser(id);
    }
    async get(id) {
        return await this.auditLogService.getById(id);
    }
    async create(dto) {
        return await this.auditLogService.create(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuditLogsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], AuditLogsController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuditLogsController.prototype, "getByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuditLogsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [audit_logs_dto_1.AuditLogsDTO]),
    __metadata("design:returntype", Promise)
], AuditLogsController.prototype, "create", null);
AuditLogsController = __decorate([
    (0, common_1.Controller)('audit-logs'),
    (0, swagger_1.ApiTags)('Audit Logs Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [audit_logs_service_1.AuditLogService])
], AuditLogsController);
exports.AuditLogsController = AuditLogsController;
//# sourceMappingURL=audit-logs.controller.js.map
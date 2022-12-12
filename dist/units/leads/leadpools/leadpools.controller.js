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
exports.LeadPoolsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const leadpools_dto_1 = require("./leadpools.dto");
const leadpools_service_1 = require("./leadpools.service");
let LeadPoolsController = class LeadPoolsController {
    constructor(leadPoolService) {
        this.leadPoolService = leadPoolService;
    }
    async getAll() {
        return await this.leadPoolService.getAll();
    }
    async getAllByStatus(status) {
        return await this.leadPoolService.getAllByStatus(status);
    }
    async getAllByBroker(broker) {
        return await this.leadPoolService.getByBroker(broker);
    }
    async getAllByAssigned(assigned) {
        return await this.leadPoolService.getByAssignedUser(assigned);
    }
    async getByPreference(preference) {
        return await this.leadPoolService.getByPreferenceUser(preference);
    }
    async getBySourceType(sourceType) {
        return await this.leadPoolService.getBySourceType(sourceType);
    }
    async getBySourceID(sourceID) {
        return await this.leadPoolService.getBySourceID(sourceID);
    }
    async getByState(state) {
        return await this.leadPoolService.getByState(state);
    }
    async get(id) {
        return await this.leadPoolService.getById(id);
    }
    async create(dto) {
        return await this.leadPoolService.create(dto);
    }
    async update(id, dto) {
        return await this.leadPoolService.update(id, dto);
    }
    async softDelete(id) {
        return await this.leadPoolService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.leadPoolService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-broker/:broker'),
    __param(0, (0, common_1.Param)('broker')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "getAllByBroker", null);
__decorate([
    (0, common_1.Get)('/by-assigned-user/:assigned'),
    __param(0, (0, common_1.Param)('assigned')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "getAllByAssigned", null);
__decorate([
    (0, common_1.Get)('/by-preference/:preference'),
    __param(0, (0, common_1.Param)('preference')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "getByPreference", null);
__decorate([
    (0, common_1.Get)('/by-source-type/:source-type'),
    __param(0, (0, common_1.Param)('source-type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "getBySourceType", null);
__decorate([
    (0, common_1.Get)('/by-source-id/:source-id'),
    __param(0, (0, common_1.Param)('source-id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "getBySourceID", null);
__decorate([
    (0, common_1.Get)('/by-state/:state'),
    __param(0, (0, common_1.Param)('state')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "getByState", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [leadpools_dto_1.LeadPoolDTO]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, leadpools_dto_1.LeadPoolDTO]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadPoolsController.prototype, "hardDelete", null);
LeadPoolsController = __decorate([
    (0, common_1.Controller)('lead-pool'),
    (0, swagger_1.ApiTags)('Lead Pools Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [leadpools_service_1.LeadpoolsService])
], LeadPoolsController);
exports.LeadPoolsController = LeadPoolsController;
//# sourceMappingURL=leadpools.controller.js.map
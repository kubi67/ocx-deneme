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
exports.LeadStateDescriptionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const lead_state_description_dto_1 = require("./lead-state-description.dto");
const lead_state_description_service_1 = require("./lead-state-description.service");
let LeadStateDescriptionController = class LeadStateDescriptionController {
    constructor(leadStateDescriptionService) {
        this.leadStateDescriptionService = leadStateDescriptionService;
    }
    async getAll() {
        return await this.leadStateDescriptionService.getAll();
    }
    async getAllByStatus(status) {
        return await this.leadStateDescriptionService.getAllByStatus(status);
    }
    async getByLanguage(language) {
        return await this.leadStateDescriptionService.getByLanguage(language);
    }
    async get(id) {
        return await this.leadStateDescriptionService.getById(id);
    }
    async create(dto) {
        return await this.leadStateDescriptionService.create(dto);
    }
    async update(id, dto) {
        return await this.leadStateDescriptionService.update(id, dto);
    }
    async softDelete(id) {
        return await this.leadStateDescriptionService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.leadStateDescriptionService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeadStateDescriptionController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], LeadStateDescriptionController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-language/:language'),
    __param(0, (0, common_1.Param)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadStateDescriptionController.prototype, "getByLanguage", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadStateDescriptionController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lead_state_description_dto_1.LeadStateDescriptionDTO]),
    __metadata("design:returntype", Promise)
], LeadStateDescriptionController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, lead_state_description_dto_1.LeadStateDescriptionDTO]),
    __metadata("design:returntype", Promise)
], LeadStateDescriptionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadStateDescriptionController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadStateDescriptionController.prototype, "hardDelete", null);
LeadStateDescriptionController = __decorate([
    (0, common_1.Controller)('lead-state-description'),
    (0, swagger_1.ApiTags)('Lead State Description Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [lead_state_description_service_1.LeadStateDescriptionService])
], LeadStateDescriptionController);
exports.LeadStateDescriptionController = LeadStateDescriptionController;
//# sourceMappingURL=lead-state-description.controller.js.map
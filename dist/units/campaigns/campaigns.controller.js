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
exports.AdCampaignsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../libs/api-results/standart-results");
const campaign_dto_1 = require("./campaign.dto");
const campaigns_service_1 = require("./campaigns.service");
let AdCampaignsController = class AdCampaignsController {
    constructor(adCampaignService) {
        this.adCampaignService = adCampaignService;
    }
    async getAll() {
        return await this.adCampaignService.getAll();
    }
    async getAllByStatus(status) {
        return await this.adCampaignService.getAllByStatus(status);
    }
    async getByBroker(broker) {
        return await this.adCampaignService.getByBrokerID(broker);
    }
    async getByUtmSource(utmSource) {
        return await this.adCampaignService.getByUtmSource(utmSource);
    }
    async getByCampaign(campaign) {
        return await this.adCampaignService.getByUtmCampaign(campaign);
    }
    async get(id) {
        return await this.adCampaignService.getById(id);
    }
    async create(dto) {
        return await this.adCampaignService.create(dto);
    }
    async update(id, dto) {
        return await this.adCampaignService.update(id, dto);
    }
    async softDelete(id) {
        return await this.adCampaignService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.adCampaignService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-broker/:broker'),
    __param(0, (0, common_1.Param)('broker')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "getByBroker", null);
__decorate([
    (0, common_1.Get)('/by-utm-source/:utm-source'),
    __param(0, (0, common_1.Param)('utm-source')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "getByUtmSource", null);
__decorate([
    (0, common_1.Get)('/by-campaign/:campaign'),
    __param(0, (0, common_1.Param)('campaign')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "getByCampaign", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [campaign_dto_1.AdCampaignsDTO]),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, campaign_dto_1.AdCampaignsDTO]),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdCampaignsController.prototype, "hardDelete", null);
AdCampaignsController = __decorate([
    (0, common_1.Controller)('ad-campaigns'),
    (0, swagger_1.ApiTags)('Ad Campaigns Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [campaigns_service_1.AdCampaignsService])
], AdCampaignsController);
exports.AdCampaignsController = AdCampaignsController;
//# sourceMappingURL=campaigns.controller.js.map
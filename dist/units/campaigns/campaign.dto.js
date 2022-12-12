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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdCampaignsDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const ad_campaigns_entity_1 = require("../../models/campaigns/ad_campaigns.entity");
class AdCampaignsDTO {
    static from(dto) {
        const it = new AdCampaignsDTO();
        it.id = dto.id;
        it.broker_id = dto.broker_id;
        it.name = dto.name;
        it.budget = dto.budget;
        it.arrival = dto.arrival;
        it.broker_id = dto.broker_id;
        it.identifier = dto.identifier;
        it.status = dto.status;
        it.utm_source = dto.utm_source;
        it.utm_medium = dto.utm_medium;
        it.utm_campaign = dto.utm_campaign;
        it.utm_content = dto.utm_content;
        it.utm_term = dto.utm_term;
        it.currency_type = dto.currency_type;
        it.start_at = dto.start_at;
        it.expire_at = dto.expire_at;
        it.created_at = dto.created_at;
        it.updated_at = dto.updated_at;
        it.deleted_at = dto.deleted_at;
        it.lastChangedDateTime = dto.lastChangedDateTime;
        it.isDeleted = dto.isDeleted;
        return it;
    }
    static fromEntity(entity) {
        return this.from({
            id: entity.id,
            broker_id: entity.broker_id,
            name: entity.name,
            budget: entity.budget,
            arrival: entity.arrival,
            identifier: entity.identifier,
            status: entity.status,
            utm_source: entity.utm_source,
            utm_medium: entity.utm_medium,
            utm_campaign: entity.utm_campaign,
            utm_content: entity.utm_content,
            utm_term: entity.utm_term,
            currency_type: entity.currency_type,
            start_at: entity.start_at,
            expire_at: entity.expire_at,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new ad_campaigns_entity_1.Adcampaigns();
        givenData.id = dto.id;
        givenData.broker_id = dto.broker_id;
        givenData.name = dto.name;
        givenData.budget = dto.budget;
        givenData.arrival = dto.arrival;
        givenData.identifier = dto.identifier;
        givenData.status = dto.status;
        givenData.utm_source = dto.utm_source;
        givenData.utm_medium = dto.utm_medium;
        givenData.utm_campaign = dto.utm_campaign;
        givenData.utm_content = dto.utm_content;
        givenData.utm_term = dto.utm_term;
        givenData.currency_type = dto.currency_type;
        givenData.start_at = dto.start_at;
        givenData.expire_at = dto.expire_at;
        givenData.created_at = dto.created_at;
        givenData.updated_at = dto.updated_at;
        givenData.lastChangedDateTime = dto.lastChangedDateTime;
        givenData.deleted_at = dto.deleted_at;
        givenData.isDeleted = dto.isDeleted;
        return givenData;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], AdCampaignsDTO.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], AdCampaignsDTO.prototype, "arrival", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: null }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "broker_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], AdCampaignsDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "utm_source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "utm_medium", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "utm_campaign", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "utm_content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "utm_term", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], AdCampaignsDTO.prototype, "currency_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Date)
], AdCampaignsDTO.prototype, "start_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Date)
], AdCampaignsDTO.prototype, "expire_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], AdCampaignsDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], AdCampaignsDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], AdCampaignsDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], AdCampaignsDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], AdCampaignsDTO.prototype, "isDeleted", void 0);
exports.AdCampaignsDTO = AdCampaignsDTO;
//# sourceMappingURL=campaign.dto.js.map
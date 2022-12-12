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
exports.BrokerAffiliateDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const broker_affiliate_entity_1 = require("../../../models/brokers/broker_affiliate.entity");
class BrokerAffiliateDTO {
    static from(dto) {
        const it = new BrokerAffiliateDTO();
        it.id = it.id;
        it.broker_id = dto.broker_id;
        it.commission_rate = dto.commission_rate;
        it.tax_rate = dto.tax_rate;
        it.payment_method = dto.payment_method;
        it.payment_setting = dto.payment_setting;
        it.payment_period = dto.payment_period;
        it.status = dto.status;
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
            commission_rate: entity.commission_rate,
            tax_rate: entity.tax_rate,
            payment_method: entity.payment_method,
            payment_setting: entity.payment_setting,
            payment_period: entity.payment_period,
            status: entity.status,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new broker_affiliate_entity_1.BrokerAffiliate();
        givenData.id = dto.id;
        givenData.broker_id = dto.broker_id;
        givenData.commission_rate = dto.commission_rate;
        givenData.tax_rate = dto.tax_rate;
        givenData.payment_method = dto.payment_method;
        givenData.payment_setting = dto.payment_setting;
        givenData.payment_period = dto.payment_period;
        givenData.status = dto.status;
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
], BrokerAffiliateDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], BrokerAffiliateDTO.prototype, "broker_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], BrokerAffiliateDTO.prototype, "commission_rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], BrokerAffiliateDTO.prototype, "tax_rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], BrokerAffiliateDTO.prototype, "payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], BrokerAffiliateDTO.prototype, "payment_setting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], BrokerAffiliateDTO.prototype, "payment_period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], BrokerAffiliateDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], BrokerAffiliateDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], BrokerAffiliateDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], BrokerAffiliateDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], BrokerAffiliateDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], BrokerAffiliateDTO.prototype, "isDeleted", void 0);
exports.BrokerAffiliateDTO = BrokerAffiliateDTO;
//# sourceMappingURL=broker_affiliate.dto.js.map
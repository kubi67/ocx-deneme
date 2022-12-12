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
exports.BrokerDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const brokers_entity_1 = require("../../../models/brokers/brokers.entity");
class BrokerDTO {
    static from(dto) {
        const it = new BrokerDTO();
        it.id = dto.id;
        it.name = dto.name;
        it.imgUrl = dto.imgUrl;
        it.email = dto.email;
        it.phone = dto.phone;
        it.city_id = dto.city_id;
        it.state_id = dto.state_id;
        it.url = dto.url;
        it.affiliate = dto.affiliate;
        it.address = dto.address;
        it.country_id = dto.country_id;
        it.status = dto.status;
        it.owner_id = dto.owner_id;
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
            name: entity.name,
            email: entity.email,
            imgUrl: entity.imgUrl,
            phone: entity.phone,
            url: entity.url,
            affiliate: entity.affiliate,
            address: entity.adress,
            country_id: entity.country_id,
            city_id: entity.city_id,
            state_id: entity.state_id,
            status: entity.status,
            owner_id: entity.owner_id,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new brokers_entity_1.Brokers();
        givenData.id = dto.id;
        givenData.name = dto.name;
        givenData.email = dto.email;
        givenData.phone = dto.phone;
        givenData.url = dto.url;
        givenData.imgUrl = dto.imgUrl;
        givenData.affiliate = dto.affiliate;
        givenData.adress = dto.address;
        givenData.country_id = dto.country_id;
        givenData.status = dto.status;
        givenData.owner_id = dto.owner_id;
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
], BrokerDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], BrokerDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], BrokerDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], BrokerDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], BrokerDTO.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], BrokerDTO.prototype, "imgUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Boolean)
], BrokerDTO.prototype, "affiliate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], BrokerDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], BrokerDTO.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], BrokerDTO.prototype, "city_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], BrokerDTO.prototype, "state_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], BrokerDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], BrokerDTO.prototype, "owner_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], BrokerDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], BrokerDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], BrokerDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], BrokerDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], BrokerDTO.prototype, "isDeleted", void 0);
exports.BrokerDTO = BrokerDTO;
//# sourceMappingURL=broker.dto.js.map
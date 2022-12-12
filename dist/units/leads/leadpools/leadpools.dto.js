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
exports.LeadPoolDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const lead_pool_entity_1 = require("../../../models/leads/lead_pool.entity");
class LeadPoolDTO {
    static from(dto) {
        const it = new LeadPoolDTO();
        it.id = dto.id;
        it.campaign_id = dto.campaign_id;
        it.firstname = dto.firstname;
        it.lastname = dto.lastname;
        it.email = dto.email;
        it.phone = dto.phone;
        it.assigned_broker = dto.assigned_broker;
        it.assigned_user = dto.assigned_user;
        it.preference_user = dto.preference_user;
        it.source_type = dto.source_type;
        it.source_id = dto.source_id;
        it.state = dto.state;
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
            campaign_id: entity.campaign_id,
            firstname: entity.firstname,
            lastname: entity.lastname,
            email: entity.email,
            phone: entity.phone,
            assigned_broker: entity.assigned_broker,
            preference_user: entity.preference_user,
            source_type: entity.source_type,
            source_id: entity.source_id,
            state: entity.state,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new lead_pool_entity_1.LeadPool();
        givenData.id = dto.id;
        givenData.campaign_id = dto.campaign_id;
        givenData.firstname = dto.firstname;
        givenData.lastname = dto.lastname;
        givenData.email = dto.email;
        givenData.phone = dto.phone;
        givenData.assigned_broker = dto.assigned_broker;
        givenData.assigned_user = dto.assigned_user;
        givenData.preference_user = dto.preference_user;
        givenData.source_type = dto.source_type;
        givenData.source_id = dto.source_id;
        givenData.state = dto.state;
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
], LeadPoolDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "campaign_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "assigned_broker", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "assigned_user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "preference_user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "source_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadPoolDTO.prototype, "source_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], LeadPoolDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LeadPoolDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LeadPoolDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LeadPoolDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LeadPoolDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], LeadPoolDTO.prototype, "isDeleted", void 0);
exports.LeadPoolDTO = LeadPoolDTO;
//# sourceMappingURL=leadpools.dto.js.map
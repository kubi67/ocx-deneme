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
exports.LeadDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const leads_entity_1 = require("../../../models/leads/leads.entity");
class LeadDTO {
    static from(dto) {
        const it = new LeadDTO();
        it.id = dto.id;
        it.broker_id = dto.broker_id;
        it.firstname = dto.firstname;
        it.lastname = dto.lastname;
        it.email = dto.email;
        it.state = dto.state;
        it.contact_preference = dto.contact_preference;
        it.campaign_id = dto.campaign_id;
        it.assigned_user = dto.assigned_user;
        it.isDelivered = dto.isDelivered;
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
            firstname: entity.firstname,
            lastname: entity.lastname,
            email: entity.email,
            state: entity.state,
            contact_preference: entity.contact_preference,
            campaign_id: entity.campaign_id,
            assigned_user: entity.assigned_user,
            isDelivered: entity.isDelivered,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new leads_entity_1.Leads();
        givenData.id = dto.id;
        givenData.broker_id = dto.broker_id;
        givenData.firstname = dto.firstname;
        givenData.lastname = dto.lastname;
        givenData.email = dto.email;
        givenData.state = dto.state;
        givenData.contact_preference = dto.contact_preference;
        givenData.campaign_id = dto.campaign_id;
        givenData.assigned_user = dto.assigned_user;
        givenData.isDelivered = dto.isDelivered;
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
], LeadDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadDTO.prototype, "broker_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadDTO.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadDTO.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LeadDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], LeadDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], LeadDTO.prototype, "contact_preference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], LeadDTO.prototype, "campaign_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], LeadDTO.prototype, "assigned_user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], LeadDTO.prototype, "isDelivered", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LeadDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LeadDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LeadDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LeadDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], LeadDTO.prototype, "isDeleted", void 0);
exports.LeadDTO = LeadDTO;
//# sourceMappingURL=leads.dto.js.map
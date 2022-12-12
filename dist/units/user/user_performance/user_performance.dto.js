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
exports.UserPerformanceDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_performance_entity_1 = require("../../../models/users/user_performance.entity");
class UserPerformanceDTO {
    static from(dto) {
        const it = new UserPerformanceDTO();
        it.id = dto.id;
        it.user_id = dto.user_id;
        it.lead_capacity = dto.lead_capacity;
        it.total_lead = dto.total_lead;
        it.assigned_by = dto.assigned_by;
        it.last_assigned_at = dto.last_assigned_at;
        it.point = dto.point;
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
            user_id: entity.user_id,
            lead_capacity: entity.lead_capacity,
            total_lead: entity.total_lead,
            assigned_by: entity.assigned_by,
            last_assigned_at: entity.last_assigned_at,
            point: entity.point,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new user_performance_entity_1.UserPerformance();
        givenData.user_id = dto.user_id;
        givenData.lead_capacity = dto.lead_capacity;
        givenData.total_lead = dto.total_lead;
        givenData.assigned_by = dto.assigned_by;
        givenData.last_assigned_at = dto.last_assigned_at;
        givenData.point = dto.point;
        givenData.created_at = dto.created_at;
        givenData.updated_at = dto.updated_at;
        givenData.deleted_at = dto.deleted_at;
        givenData.lastChangedDateTime = dto.lastChangedDateTime;
        givenData.isDeleted = dto.isDeleted;
        return givenData;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserPerformanceDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UserPerformanceDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserPerformanceDTO.prototype, "lead_capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserPerformanceDTO.prototype, "total_lead", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserPerformanceDTO.prototype, "assigned_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserPerformanceDTO.prototype, "last_assigned_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserPerformanceDTO.prototype, "point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], UserPerformanceDTO.prototype, "isDeleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], UserPerformanceDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], UserPerformanceDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], UserPerformanceDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], UserPerformanceDTO.prototype, "lastChangedDateTime", void 0);
exports.UserPerformanceDTO = UserPerformanceDTO;
//# sourceMappingURL=user_performance.dto.js.map
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
exports.LdRulesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const ld_rules_entity_1 = require("../../../models/deliveries/ld_rules.entity");
class LdRulesDTO {
    static from(dto) {
        const it = new LdRulesDTO();
        it.id = it.id;
        it.name = it.name;
        it.priority = it.priority;
        it.data = dto.data;
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
            priority: entity.priority,
            data: entity.data,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new ld_rules_entity_1.LdRules();
        givenData.id = dto.id;
        givenData.name = dto.name;
        givenData.priority = dto.priority;
        givenData.data = dto.data;
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
], LdRulesDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LdRulesDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LdRulesDTO.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LdRulesDTO.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LdRulesDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LdRulesDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LdRulesDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LdRulesDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], LdRulesDTO.prototype, "isDeleted", void 0);
exports.LdRulesDTO = LdRulesDTO;
//# sourceMappingURL=ld-rules.dto.js.map
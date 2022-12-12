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
exports.LdStrategyRulesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const ld_strategy_rules_entity_1 = require("../../../models/deliveries/ld_strategy_rules.entity");
class LdStrategyRulesDTO {
    static from(dto) {
        const it = new LdStrategyRulesDTO();
        it.id = dto.id;
        it.ld_strategy_id = dto.ld_strategy_id;
        it.ld_rule_id = dto.ld_rule_id;
        it.sort_order = dto.sort_order;
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
            ld_strategy_id: entity.ld_strategy_id,
            ld_rule_id: entity.ld_rule_id,
            sort_order: entity.sort_order,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new ld_strategy_rules_entity_1.LdStrategyRules();
        givenData.id = dto.id;
        givenData.ld_strategy_id = dto.ld_strategy_id;
        givenData.ld_rule_id = dto.ld_rule_id;
        givenData.sort_order = dto.sort_order;
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
], LdStrategyRulesDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LdStrategyRulesDTO.prototype, "ld_strategy_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LdStrategyRulesDTO.prototype, "ld_rule_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], LdStrategyRulesDTO.prototype, "sort_order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LdStrategyRulesDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LdStrategyRulesDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LdStrategyRulesDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], LdStrategyRulesDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], LdStrategyRulesDTO.prototype, "isDeleted", void 0);
exports.LdStrategyRulesDTO = LdStrategyRulesDTO;
//# sourceMappingURL=ld-strategy-rules.dto.js.map
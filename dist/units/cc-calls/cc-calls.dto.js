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
exports.CcCallsDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const cc_calls_entity_1 = require("../../models/ccs/cc_calls.entity");
class CcCallsDTO {
    static from(dto) {
        const it = new CcCallsDTO();
        it.id = it.id;
        it.cid = dto.cid;
        it.caller_number = dto.caller_number;
        it.duid = dto.duid;
        it.called_number = dto.called_number;
        it.duration = dto.duration;
        it.call_start = dto.call_start;
        it.call_end = dto.call_end;
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
            cid: entity.cid,
            caller_number: entity.caller_number,
            duid: entity.duid,
            called_number: entity.called_number,
            duration: entity.duration,
            call_start: entity.call_start,
            call_end: entity.call_end,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new cc_calls_entity_1.CcCalls();
        givenData.id = dto.id;
        givenData.cid = dto.cid;
        givenData.caller_number = dto.caller_number;
        givenData.called_number = dto.called_number;
        givenData.duid = dto.duid;
        givenData.duration = dto.duration;
        givenData.call_start = dto.call_start;
        givenData.call_end = dto.call_end;
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
], CcCallsDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CcCallsDTO.prototype, "cid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CcCallsDTO.prototype, "caller_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CcCallsDTO.prototype, "duid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CcCallsDTO.prototype, "called_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], CcCallsDTO.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Date)
], CcCallsDTO.prototype, "call_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Date)
], CcCallsDTO.prototype, "call_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], CcCallsDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], CcCallsDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], CcCallsDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], CcCallsDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], CcCallsDTO.prototype, "isDeleted", void 0);
exports.CcCallsDTO = CcCallsDTO;
//# sourceMappingURL=cc-calls.dto.js.map
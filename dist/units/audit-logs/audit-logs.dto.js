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
exports.AuditLogsDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const audit_log_entity_1 = require("../../models/logs/audit_log.entity");
class AuditLogsDTO {
    static from(dto) {
        const it = new AuditLogsDTO();
        it.id = dto.id;
        it.event_type = dto.event_type;
        it.event = dto.event;
        it.event_data = dto.event_data;
        it.url = dto.url;
        it.ip_addr = dto.ip_addr;
        it.user_agent = dto.user_agent;
        it.tags = dto.tags;
        it.user_id = dto.user_id;
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
            event_type: entity.event_type,
            event: entity.event,
            event_data: entity.event_data,
            url: entity.url,
            ip_addr: entity.ip_addr,
            user_agent: entity.user_agent,
            tags: entity.tags,
            user_id: entity.user_id,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new audit_log_entity_1.AuditLog();
        givenData.event_type = dto.event_type;
        givenData.event = dto.event;
        givenData.event_data = dto.event_data;
        givenData.url = dto.url;
        givenData.ip_addr = dto.ip_addr;
        givenData.user_agent = dto.user_agent;
        givenData.tags = dto.tags;
        givenData.user_id = dto.user_id;
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
], AuditLogsDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], AuditLogsDTO.prototype, "event_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AuditLogsDTO.prototype, "event", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AuditLogsDTO.prototype, "event_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AuditLogsDTO.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AuditLogsDTO.prototype, "ip_addr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AuditLogsDTO.prototype, "user_agent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], AuditLogsDTO.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], AuditLogsDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], AuditLogsDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], AuditLogsDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], AuditLogsDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], AuditLogsDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], AuditLogsDTO.prototype, "isDeleted", void 0);
exports.AuditLogsDTO = AuditLogsDTO;
//# sourceMappingURL=audit-logs.dto.js.map
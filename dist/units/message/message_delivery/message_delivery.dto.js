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
exports.MessageDeliveryDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const message_delivery_entity_1 = require("../../../models/messages/message_delivery.entity");
class MessageDeliveryDTO {
    static from(dto) {
        const it = new MessageDeliveryDTO();
        it.id = dto.id;
        it.message_id = dto.message_id;
        it.user_id = dto.user_id;
        it.content = dto.content;
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
            message_id: entity.message_id,
            user_id: entity.user_id,
            content: entity.content,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new message_delivery_entity_1.MessageDelivery();
        givenData.id = dto.id;
        givenData.message_id = dto.message_id;
        givenData.user_id = dto.user_id;
        givenData.content = dto.content;
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
], MessageDeliveryDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], MessageDeliveryDTO.prototype, "message_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], MessageDeliveryDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], MessageDeliveryDTO.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], MessageDeliveryDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], MessageDeliveryDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], MessageDeliveryDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], MessageDeliveryDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], MessageDeliveryDTO.prototype, "isDeleted", void 0);
exports.MessageDeliveryDTO = MessageDeliveryDTO;
//# sourceMappingURL=message_delivery.dto.js.map
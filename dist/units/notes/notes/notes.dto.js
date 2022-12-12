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
exports.NotesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const notes_entity_1 = require("../../../models/notes/notes.entity");
class NotesDTO {
    static from(dto) {
        const it = new NotesDTO();
        it.id = dto.id;
        it.author_id = dto.author_id;
        it.model_type = dto.model_type;
        it.model_id = dto.model_id;
        it.note = dto.note;
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
            author_id: entity.author_id,
            model_type: entity.model_type,
            model_id: entity.model_id,
            note: entity.note,
            status: entity.status,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new notes_entity_1.Notes();
        givenData.id = dto.id;
        givenData.author_id = dto.author_id;
        givenData.model_id = dto.model_id;
        givenData.model_type = dto.model_type;
        givenData.note = dto.note;
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
], NotesDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], NotesDTO.prototype, "author_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], NotesDTO.prototype, "model_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], NotesDTO.prototype, "model_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], NotesDTO.prototype, "note", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], NotesDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], NotesDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], NotesDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], NotesDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], NotesDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], NotesDTO.prototype, "isDeleted", void 0);
exports.NotesDTO = NotesDTO;
//# sourceMappingURL=notes.dto.js.map
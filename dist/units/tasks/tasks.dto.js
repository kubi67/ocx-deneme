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
exports.TasksDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const tasks_entity_1 = require("../../models/task/tasks.entity");
class TasksDTO {
    static from(dto) {
        const it = new TasksDTO();
        it.id = dto.id;
        it.name = dto.name;
        it.note_id = dto.note_id;
        it.sys_ownered = dto.sys_ownered;
        it.owner_id = dto.owner_id;
        it.start_at = dto.start_at;
        it.expire_at = dto.expire_at;
        it.assigned_user = dto.assigned_user;
        it.data = dto.data;
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
            name: entity.name,
            note_id: entity.note_id,
            sys_ownered: entity.sys_ownered,
            owner_id: entity.owner_id,
            start_at: entity.start_at,
            expire_at: entity.expire_at,
            assigned_user: entity.assigned_user,
            data: entity.data,
            state: entity.state,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
        });
    }
    static toEntity(dto) {
        const givenData = new tasks_entity_1.Tasks();
        givenData.id = dto.id;
        givenData.name = dto.name;
        givenData.note_id = dto.note_id;
        givenData.sys_ownered = dto.sys_ownered;
        givenData.owner_id = dto.owner_id;
        givenData.start_at = dto.start_at;
        givenData.expire_at = dto.expire_at;
        givenData.assigned_user = dto.assigned_user;
        givenData.data = dto.data;
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
], TasksDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], TasksDTO.prototype, "note_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], TasksDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Boolean)
], TasksDTO.prototype, "sys_ownered", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], TasksDTO.prototype, "owner_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], TasksDTO.prototype, "start_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], TasksDTO.prototype, "expire_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], TasksDTO.prototype, "assigned_user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], TasksDTO.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], TasksDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], TasksDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], TasksDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], TasksDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], TasksDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], TasksDTO.prototype, "isDeleted", void 0);
exports.TasksDTO = TasksDTO;
//# sourceMappingURL=tasks.dto.js.map
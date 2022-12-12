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
exports.RegisterUsersDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../../models/users/user.entity");
class RegisterUsersDTO {
    static from(dto) {
        const it = new RegisterUsersDTO();
        it.id = dto.id;
        it.parent_id = dto.parent_id;
        it.status = dto.status;
        it.two_factor_secret = dto.two_factor_secret;
        it.two_factor_recover_code = dto.two_factor_recover_code;
        it.two_factor_confirmed_at = dto.two_factor_confirmed_at;
        it.current_broker_id = it.current_broker_id;
        it.setting = dto.setting;
        it.firstname = dto.firstname;
        it.lastname = dto.lastname;
        it.email = dto.email;
        it.username = dto.username;
        it.password = dto.password;
        it.created_at = dto.created_at;
        it.updated_at = dto.updated_at;
        it.deleted_at = dto.deleted_at;
        it.lastChangedDateTime = dto.lastChangedDateTime;
        it.isDeleted = dto.isDeleted;
        it.isApproved = dto.isApproved;
        it.isVerified = dto.isVerified;
        return it;
    }
    static fromEntity(entity) {
        return this.from({
            id: entity.id,
            parent_id: entity.parent_id,
            status: entity.status,
            email: entity.email,
            username: entity.username,
            password: entity.password,
            two_factor_secret: entity.two_factor_secret,
            two_factor_recover_code: entity.two_factor_recover_code,
            two_factor_confirmed_at: entity.two_factor_confirmed_at,
            current_broker_id: entity.current_broker_id,
            setting: entity.setting,
            firstname: entity.firstname,
            lastname: entity.lastname,
            created_at: entity.created_at,
            updated_at: entity.updated_at,
            deleted_at: entity.deleted_at,
            lastChangedDateTime: entity.lastChangedDateTime,
            isDeleted: entity.isDeleted,
            isApproved: entity.isApproved,
            isVerified: entity.isVerified,
        });
    }
    static toEntity(dto) {
        const givenData = new user_entity_1.User();
        givenData.id = dto.id;
        givenData.email = dto.email;
        givenData.password = dto.password;
        givenData.username = dto.username;
        givenData.parent_id = dto.parent_id;
        givenData.status = dto.status;
        givenData.two_factor_secret = dto.two_factor_secret;
        givenData.two_factor_recover_code = dto.two_factor_recover_code;
        givenData.two_factor_confirmed_at = dto.two_factor_confirmed_at;
        givenData.current_broker_id = dto.current_broker_id;
        givenData.setting = dto.setting;
        givenData.firstname = dto.firstname;
        givenData.lastname = dto.lastname;
        givenData.created_at = dto.created_at;
        givenData.updated_at = dto.updated_at;
        givenData.deleted_at = dto.deleted_at;
        givenData.lastChangedDateTime = dto.lastChangedDateTime;
        givenData.isDeleted = dto.isDeleted;
        givenData.isApproved = dto.isApproved;
        givenData.isVerified = dto.isVerified;
        return givenData;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    }),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "parent_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RegisterUsersDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "two_factor_secret", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "two_factor_recover_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], RegisterUsersDTO.prototype, "two_factor_confirmed_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "current_broker_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "setting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "firstname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterUsersDTO.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], RegisterUsersDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], RegisterUsersDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], RegisterUsersDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Date)
], RegisterUsersDTO.prototype, "lastChangedDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], RegisterUsersDTO.prototype, "isDeleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], RegisterUsersDTO.prototype, "isApproved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Boolean)
], RegisterUsersDTO.prototype, "isVerified", void 0);
exports.RegisterUsersDTO = RegisterUsersDTO;
//# sourceMappingURL=register.dto.js.map
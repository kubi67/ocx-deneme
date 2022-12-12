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
exports.LoginUsersDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../../models/users/user.entity");
class LoginUsersDTO {
    static from(dto) {
        const it = new LoginUsersDTO();
        it.id = dto.id;
        it.email = dto.email;
        it.username = dto.username;
        it.password = dto.password;
        return it;
    }
    static fromEntity(entity) {
        return this.from({
            id: entity.id,
            email: entity.email,
            username: entity.username,
            password: entity.password,
        });
    }
    static toEntity(dto) {
        const givenData = new user_entity_1.User();
        givenData.id = dto.id;
        givenData.email = dto.email;
        givenData.password = dto.password;
        givenData.username = dto.username;
        return givenData;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginUsersDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], LoginUsersDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginUsersDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginUsersDTO.prototype, "password", void 0);
exports.LoginUsersDTO = LoginUsersDTO;
//# sourceMappingURL=auth.dto.js.map
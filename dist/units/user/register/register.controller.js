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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const register_dto_1 = require("./register.dto");
const register_service_1 = require("./register.service");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    async create(dto) {
        return await this.registerService.register(dto);
    }
    async createUser(dto) {
        return await this.registerService.register(dto);
    }
};
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterUsersDTO]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/create-user/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterUsersDTO]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "createUser", null);
RegisterController = __decorate([
    (0, common_1.Controller)('register'),
    (0, swagger_1.ApiTags)('Register Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [register_service_1.RegisterService])
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=register.controller.js.map
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
exports.BrokerUserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const broker_user_dto_1 = require("./broker_user.dto");
const broker_user_service_1 = require("./broker_user.service");
let BrokerUserController = class BrokerUserController {
    constructor(brokerUserService) {
        this.brokerUserService = brokerUserService;
    }
    async getAll() {
        return await this.brokerUserService.getAll();
    }
    async getAllByStatus(status) {
        return await this.brokerUserService.getAllByStatus(status);
    }
    async get(id) {
        return await this.brokerUserService.getById(id);
    }
    async create(dto) {
        return await this.brokerUserService.create(dto);
    }
    async update(id, dto) {
        return await this.brokerUserService.update(id, dto);
    }
    async softDelete(id) {
        return await this.brokerUserService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.brokerUserService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrokerUserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], BrokerUserController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrokerUserController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [broker_user_dto_1.BrokerUserDTO]),
    __metadata("design:returntype", Promise)
], BrokerUserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, broker_user_dto_1.BrokerUserDTO]),
    __metadata("design:returntype", Promise)
], BrokerUserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrokerUserController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrokerUserController.prototype, "hardDelete", null);
BrokerUserController = __decorate([
    (0, common_1.Controller)('broker-user'),
    (0, swagger_1.ApiTags)('Broker User Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [broker_user_service_1.BrokerUserService])
], BrokerUserController);
exports.BrokerUserController = BrokerUserController;
//# sourceMappingURL=broker_user.controller.js.map
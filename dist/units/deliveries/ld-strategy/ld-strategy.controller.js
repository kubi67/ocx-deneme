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
exports.LdStrategyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const ld_strategy_dto_1 = require("./ld-strategy.dto");
const ld_strategy_service_1 = require("./ld-strategy.service");
let LdStrategyController = class LdStrategyController {
    constructor(ldStrategyService) {
        this.ldStrategyService = ldStrategyService;
    }
    async getAll() {
        return await this.ldStrategyService.getAll();
    }
    async getAllByStatus(status) {
        return await this.ldStrategyService.getAllByStatus(status);
    }
    async getByModelID(name) {
        return await this.ldStrategyService.getByName(name);
    }
    async get(id) {
        return await this.ldStrategyService.getById(id);
    }
    async create(dto) {
        return await this.ldStrategyService.create(dto);
    }
    async update(id, dto) {
        return await this.ldStrategyService.update(id, dto);
    }
    async softDelete(id) {
        return await this.ldStrategyService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.ldStrategyService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LdStrategyController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], LdStrategyController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdStrategyController.prototype, "getByModelID", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdStrategyController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ld_strategy_dto_1.LdStrategyDTO]),
    __metadata("design:returntype", Promise)
], LdStrategyController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ld_strategy_dto_1.LdStrategyDTO]),
    __metadata("design:returntype", Promise)
], LdStrategyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdStrategyController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdStrategyController.prototype, "hardDelete", null);
LdStrategyController = __decorate([
    (0, common_1.Controller)('ld-strategy'),
    (0, swagger_1.ApiTags)('Ld Strategy Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [ld_strategy_service_1.LdStrategyService])
], LdStrategyController);
exports.LdStrategyController = LdStrategyController;
//# sourceMappingURL=ld-strategy.controller.js.map
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
exports.LdStrategyRulesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const ld_strategy_rules_dto_1 = require("./ld-strategy-rules.dto");
const ld_strategy_rules_service_1 = require("./ld-strategy-rules.service");
let LdStrategyRulesController = class LdStrategyRulesController {
    constructor(ldStrategyRulesService) {
        this.ldStrategyRulesService = ldStrategyRulesService;
    }
    async getAll() {
        return await this.ldStrategyRulesService.getAll();
    }
    async getAllByStatus(status) {
        return await this.ldStrategyRulesService.getAllByStatus(status);
    }
    async getByLdStrategy(strategy) {
        return await this.ldStrategyRulesService.getByLdStrategy(strategy);
    }
    async getByLdRule(rule) {
        return await this.ldStrategyRulesService.getByLdRule(rule);
    }
    async get(id) {
        return await this.ldStrategyRulesService.getById(id);
    }
    async create(dto) {
        return await this.ldStrategyRulesService.create(dto);
    }
    async update(id, dto) {
        return await this.ldStrategyRulesService.update(id, dto);
    }
    async softDelete(id) {
        return await this.ldStrategyRulesService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.ldStrategyRulesService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LdStrategyRulesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], LdStrategyRulesController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-ld-strategy/:strategy'),
    __param(0, (0, common_1.Param)('strategy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdStrategyRulesController.prototype, "getByLdStrategy", null);
__decorate([
    (0, common_1.Get)('/by-ld-rule/:rule'),
    __param(0, (0, common_1.Param)('rule')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdStrategyRulesController.prototype, "getByLdRule", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdStrategyRulesController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ld_strategy_rules_dto_1.LdStrategyRulesDTO]),
    __metadata("design:returntype", Promise)
], LdStrategyRulesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ld_strategy_rules_dto_1.LdStrategyRulesDTO]),
    __metadata("design:returntype", Promise)
], LdStrategyRulesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdStrategyRulesController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdStrategyRulesController.prototype, "hardDelete", null);
LdStrategyRulesController = __decorate([
    (0, common_1.Controller)('ld-strategy-rules'),
    (0, swagger_1.ApiTags)('Ld Strategy Rules Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [ld_strategy_rules_service_1.LdStrategyRulesService])
], LdStrategyRulesController);
exports.LdStrategyRulesController = LdStrategyRulesController;
//# sourceMappingURL=ld-strategy-rules.controller.js.map
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
exports.LdRulesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const ld_rules_dto_1 = require("./ld-rules.dto");
const ld_rules_service_1 = require("./ld-rules.service");
let LdRulesController = class LdRulesController {
    constructor(ldRulesService) {
        this.ldRulesService = ldRulesService;
    }
    async getAll() {
        return await this.ldRulesService.getAll();
    }
    async getAllByStatus(status) {
        return await this.ldRulesService.getAllByStatus(status);
    }
    async getByModelID(name) {
        return await this.ldRulesService.getByName(name);
    }
    async get(id) {
        return await this.ldRulesService.getById(id);
    }
    async create(dto) {
        return await this.ldRulesService.create(dto);
    }
    async update(id, dto) {
        return await this.ldRulesService.update(id, dto);
    }
    async softDelete(id) {
        return await this.ldRulesService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.ldRulesService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LdRulesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], LdRulesController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdRulesController.prototype, "getByModelID", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdRulesController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ld_rules_dto_1.LdRulesDTO]),
    __metadata("design:returntype", Promise)
], LdRulesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ld_rules_dto_1.LdRulesDTO]),
    __metadata("design:returntype", Promise)
], LdRulesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdRulesController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LdRulesController.prototype, "hardDelete", null);
LdRulesController = __decorate([
    (0, common_1.Controller)('ld-rules'),
    (0, swagger_1.ApiTags)('Ld Rules Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [ld_rules_service_1.LdRulesService])
], LdRulesController);
exports.LdRulesController = LdRulesController;
//# sourceMappingURL=ld-rules.controller.js.map
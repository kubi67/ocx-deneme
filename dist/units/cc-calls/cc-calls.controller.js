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
exports.CcCallsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../libs/api-results/standart-results");
const cc_calls_dto_1 = require("./cc-calls.dto");
const cc_calls_service_1 = require("./cc-calls.service");
let CcCallsController = class CcCallsController {
    constructor(ccCallsService) {
        this.ccCallsService = ccCallsService;
    }
    async getAll() {
        return await this.ccCallsService.getAll();
    }
    async getAllByStatus(status) {
        return await this.ccCallsService.getAllByStatus(status);
    }
    async getByCid(cid) {
        return await this.ccCallsService.getByCid(cid);
    }
    async getByDuid(duid) {
        return await this.ccCallsService.getByDuid(duid);
    }
    async get(id) {
        return await this.ccCallsService.getById(id);
    }
    async create(dto) {
        return await this.ccCallsService.create(dto);
    }
    async update(id, dto) {
        return await this.ccCallsService.update(id, dto);
    }
    async softDelete(id) {
        return await this.ccCallsService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.ccCallsService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CcCallsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], CcCallsController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-cid/:cid'),
    __param(0, (0, common_1.Param)('cid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CcCallsController.prototype, "getByCid", null);
__decorate([
    (0, common_1.Get)('/by-duid/:duid'),
    __param(0, (0, common_1.Param)('duid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CcCallsController.prototype, "getByDuid", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CcCallsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cc_calls_dto_1.CcCallsDTO]),
    __metadata("design:returntype", Promise)
], CcCallsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cc_calls_dto_1.CcCallsDTO]),
    __metadata("design:returntype", Promise)
], CcCallsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CcCallsController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CcCallsController.prototype, "hardDelete", null);
CcCallsController = __decorate([
    (0, common_1.Controller)('cc-calls'),
    (0, swagger_1.ApiTags)('Cc Calls Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [cc_calls_service_1.CcCallsService])
], CcCallsController);
exports.CcCallsController = CcCallsController;
//# sourceMappingURL=cc-calls.controller.js.map
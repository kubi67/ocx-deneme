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
exports.SettingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../libs/api-results/standart-results");
const settings_dto_1 = require("./settings.dto");
const settings_service_1 = require("./settings.service");
let SettingsController = class SettingsController {
    constructor(settingService) {
        this.settingService = settingService;
    }
    async getAll() {
        return await this.settingService.getAll();
    }
    async getAllByStatus(status) {
        return await this.settingService.getAllByStatus(status);
    }
    async getByModelID(id) {
        return await this.settingService.getByModelID(id);
    }
    async getByModelName(name) {
        return await this.settingService.getByModelName(name);
    }
    async getByCreator(id) {
        return await this.settingService.getByCreatedBy(id);
    }
    async get(id) {
        return await this.settingService.getById(id);
    }
    async create(dto) {
        return await this.settingService.create(dto);
    }
    async update(id, dto) {
        return await this.settingService.update(id, dto);
    }
    async softDelete(id) {
        return await this.settingService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.settingService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-modelid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getByModelID", null);
__decorate([
    (0, common_1.Get)('/by-model-name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getByModelName", null);
__decorate([
    (0, common_1.Get)('/by-creator/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getByCreator", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settings_dto_1.SettingsDTO]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, settings_dto_1.SettingsDTO]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "hardDelete", null);
SettingsController = __decorate([
    (0, common_1.Controller)('settings'),
    (0, swagger_1.ApiTags)('Settings Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], SettingsController);
exports.SettingsController = SettingsController;
//# sourceMappingURL=settings.controller.js.map
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
exports.BrokerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const broker_dto_1 = require("./broker.dto");
const brokers_service_1 = require("./brokers.service");
let BrokerController = class BrokerController {
    constructor(brokerService) {
        this.brokerService = brokerService;
    }
    async getAll() {
        return await this.brokerService.getAll();
    }
    async getAllByStatus(status) {
        return await this.brokerService.getAllByStatus(status);
    }
    async getSimpleBroker() {
        return await this.brokerService.getSimpleAllBrokers();
    }
    async getSimpleBrokerById(id) {
        return await this.brokerService.getSimpleBrokerByID(id);
    }
    async getSimpleBrokerManager() {
        return await this.brokerService.getSimpleAllBrokerManager();
    }
    async getSimpleBrokerManagerByID(id) {
        return await this.brokerService.getSimpleBrokerManagerByID(id);
    }
    async getByOwner(id) {
        return await this.brokerService.getByOwner(id);
    }
    async getByCountry(country) {
        return await this.brokerService.getByCountry(country);
    }
    async getByCity(city) {
        return await this.brokerService.getByCity(city);
    }
    async get(id) {
        return await this.brokerService.getById(id);
    }
    async create(dto) {
        return await this.brokerService.create(dto);
    }
    async update(id, dto) {
        return await this.brokerService.update(id, dto);
    }
    async softDelete(id) {
        return await this.brokerService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.brokerService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/simple-broker'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "getSimpleBroker", null);
__decorate([
    (0, common_1.Get)('/simple-broker-by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "getSimpleBrokerById", null);
__decorate([
    (0, common_1.Get)('/simple-broker-manager'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "getSimpleBrokerManager", null);
__decorate([
    (0, common_1.Get)('/simple-broker-manager-by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "getSimpleBrokerManagerByID", null);
__decorate([
    (0, common_1.Get)('/by-owner/:owner'),
    __param(0, (0, common_1.Param)('owner')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "getByOwner", null);
__decorate([
    (0, common_1.Get)('/by-country/:country'),
    __param(0, (0, common_1.Param)('country')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "getByCountry", null);
__decorate([
    (0, common_1.Get)('/by-city/:city'),
    __param(0, (0, common_1.Param)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "getByCity", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [broker_dto_1.BrokerDTO]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, broker_dto_1.BrokerDTO]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrokerController.prototype, "hardDelete", null);
BrokerController = __decorate([
    (0, common_1.Controller)('brokers'),
    (0, swagger_1.ApiTags)('Broker Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [brokers_service_1.BrokersService])
], BrokerController);
exports.BrokerController = BrokerController;
//# sourceMappingURL=brokers.controller.js.map
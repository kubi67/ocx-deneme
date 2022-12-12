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
exports.MessageDeliveryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const message_delivery_dto_1 = require("./message_delivery.dto");
const message_delivery_service_1 = require("./message_delivery.service");
let MessageDeliveryController = class MessageDeliveryController {
    constructor(messageDeliveryService) {
        this.messageDeliveryService = messageDeliveryService;
    }
    async getAll() {
        return await this.messageDeliveryService.getAll();
    }
    async getAllByStatus(status) {
        return await this.messageDeliveryService.getAllByStatus(status);
    }
    async get(id) {
        return await this.messageDeliveryService.getById(id);
    }
    async getLeadsFull() {
        return await this.messageDeliveryService.getAllWithAll();
    }
    async getByMessage(message) {
        return await this.messageDeliveryService.getByMessage(message);
    }
    async getByUser(user) {
        return await this.messageDeliveryService.getByUser(user);
    }
    async create(dto) {
        return await this.messageDeliveryService.create(dto);
    }
    async update(id, dto) {
        return await this.messageDeliveryService.update(id, dto);
    }
    async softDelete(id) {
        return await this.messageDeliveryService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.messageDeliveryService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/active-leads/:status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "getLeadsFull", null);
__decorate([
    (0, common_1.Get)('/by-message/:message'),
    __param(0, (0, common_1.Param)('message')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "getByMessage", null);
__decorate([
    (0, common_1.Get)('/by-user/:user'),
    __param(0, (0, common_1.Param)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "getByUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_delivery_dto_1.MessageDeliveryDTO]),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, message_delivery_dto_1.MessageDeliveryDTO]),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageDeliveryController.prototype, "hardDelete", null);
MessageDeliveryController = __decorate([
    (0, common_1.Controller)('message-delivery'),
    (0, swagger_1.ApiTags)('Message Delivery Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [message_delivery_service_1.MessageDeliveryService])
], MessageDeliveryController);
exports.MessageDeliveryController = MessageDeliveryController;
//# sourceMappingURL=message_delivery.controller.js.map
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
exports.NotificationDeliveryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const notification_delivery_dto_1 = require("./notification-delivery.dto");
const notification_delivery_service_1 = require("./notification-delivery.service");
let NotificationDeliveryController = class NotificationDeliveryController {
    constructor(notificationDeliveryService) {
        this.notificationDeliveryService = notificationDeliveryService;
    }
    async getAll() {
        return await this.notificationDeliveryService.getAll();
    }
    async getAllByStatus(status) {
        return await this.notificationDeliveryService.getAllByStatus(status);
    }
    async get(id) {
        return await this.notificationDeliveryService.getById(id);
    }
    async getLeadsFull() {
        return await this.notificationDeliveryService.getAllWithAll();
    }
    async getByUser(id) {
        return await this.notificationDeliveryService.getByUser(id);
    }
    async getByNotification(id) {
        return await this.notificationDeliveryService.getByNotification(id);
    }
    async create(dto) {
        return await this.notificationDeliveryService.create(dto);
    }
    async update(id, dto) {
        return await this.notificationDeliveryService.update(id, dto);
    }
    async softDelete(id) {
        return await this.notificationDeliveryService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.notificationDeliveryService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/active-leads/:status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "getLeadsFull", null);
__decorate([
    (0, common_1.Get)('/by-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "getByUser", null);
__decorate([
    (0, common_1.Get)('/by-notification/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "getByNotification", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_delivery_dto_1.NotificationDeliveryDTO]),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, notification_delivery_dto_1.NotificationDeliveryDTO]),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationDeliveryController.prototype, "hardDelete", null);
NotificationDeliveryController = __decorate([
    (0, common_1.Controller)('notification-delivery'),
    (0, swagger_1.ApiTags)('Notification Delivery Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [notification_delivery_service_1.NotificationDeliveryService])
], NotificationDeliveryController);
exports.NotificationDeliveryController = NotificationDeliveryController;
//# sourceMappingURL=notification-delivery.controller.js.map
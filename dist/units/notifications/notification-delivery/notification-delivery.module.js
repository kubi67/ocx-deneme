"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDeliveryModule = void 0;
const common_1 = require("@nestjs/common");
const notification_delivery_service_1 = require("./notification-delivery.service");
const notification_delivery_controller_1 = require("./notification-delivery.controller");
const typeorm_1 = require("@nestjs/typeorm");
const notification_delivery_entity_1 = require("../../../models/notifications/notification_delivery.entity");
let NotificationDeliveryModule = class NotificationDeliveryModule {
};
NotificationDeliveryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notification_delivery_entity_1.NotificationDelivery])],
        providers: [notification_delivery_service_1.NotificationDeliveryService],
        controllers: [notification_delivery_controller_1.NotificationDeliveryController],
    })
], NotificationDeliveryModule);
exports.NotificationDeliveryModule = NotificationDeliveryModule;
//# sourceMappingURL=notification-delivery.module.js.map
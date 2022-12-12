"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDeliveryModule = void 0;
const common_1 = require("@nestjs/common");
const message_delivery_service_1 = require("./message_delivery.service");
const message_delivery_controller_1 = require("./message_delivery.controller");
const typeorm_1 = require("@nestjs/typeorm");
const message_delivery_entity_1 = require("../../../models/messages/message_delivery.entity");
let MessageDeliveryModule = class MessageDeliveryModule {
};
MessageDeliveryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([message_delivery_entity_1.MessageDelivery])],
        providers: [message_delivery_service_1.MessageDeliveryService],
        controllers: [message_delivery_controller_1.MessageDeliveryController]
    })
], MessageDeliveryModule);
exports.MessageDeliveryModule = MessageDeliveryModule;
//# sourceMappingURL=message_delivery.module.js.map
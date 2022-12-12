"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerUserModule = void 0;
const common_1 = require("@nestjs/common");
const broker_user_service_1 = require("./broker_user.service");
const broker_user_controller_1 = require("./broker_user.controller");
const typeorm_1 = require("@nestjs/typeorm");
const broker_user_entity_1 = require("../../../models/brokers/broker_user.entity");
let BrokerUserModule = class BrokerUserModule {
};
BrokerUserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([broker_user_entity_1.BrokerUser])],
        providers: [broker_user_service_1.BrokerUserService],
        controllers: [broker_user_controller_1.BrokerUserController],
        exports: [broker_user_service_1.BrokerUserService]
    })
], BrokerUserModule);
exports.BrokerUserModule = BrokerUserModule;
//# sourceMappingURL=broker_user.module.js.map
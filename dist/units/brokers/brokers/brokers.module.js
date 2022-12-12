"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brokers_entity_1 = require("../../../models/brokers/brokers.entity");
const broker_user_entity_1 = require("../../../models/brokers/broker_user.entity");
const user_module_1 = require("../../user/user/user.module");
const broker_user_module_1 = require("../broker_user/broker_user.module");
const brokers_controller_1 = require("./brokers.controller");
const brokers_service_1 = require("./brokers.service");
let BrokerModule = class BrokerModule {
};
BrokerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([brokers_entity_1.Brokers, broker_user_entity_1.BrokerUser]),
            user_module_1.UserModule,
            broker_user_module_1.BrokerUserModule,
        ],
        providers: [brokers_service_1.BrokersService],
        controllers: [brokers_controller_1.BrokerController],
        exports: [brokers_service_1.BrokersService],
    })
], BrokerModule);
exports.BrokerModule = BrokerModule;
//# sourceMappingURL=brokers.module.js.map
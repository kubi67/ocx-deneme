"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerAffiliateModule = void 0;
const common_1 = require("@nestjs/common");
const broker_affiliate_service_1 = require("./broker_affiliate.service");
const broker_affiliate_controller_1 = require("./broker_affiliate.controller");
const broker_affiliate_entity_1 = require("../../../models/brokers/broker_affiliate.entity");
const typeorm_1 = require("@nestjs/typeorm");
let BrokerAffiliateModule = class BrokerAffiliateModule {
};
BrokerAffiliateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([broker_affiliate_entity_1.BrokerAffiliate])],
        providers: [broker_affiliate_service_1.BrokerAffiliateService],
        controllers: [broker_affiliate_controller_1.BrokerAffiliateController],
        exports: [broker_affiliate_service_1.BrokerAffiliateService],
    })
], BrokerAffiliateModule);
exports.BrokerAffiliateModule = BrokerAffiliateModule;
//# sourceMappingURL=broker_affiliate.module.js.map
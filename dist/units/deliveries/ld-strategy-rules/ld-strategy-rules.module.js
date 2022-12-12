"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LdStrategyRulesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ld_strategy_rules_entity_1 = require("../../../models/deliveries/ld_strategy_rules.entity");
const ld_strategy_rules_controller_1 = require("./ld-strategy-rules.controller");
const ld_strategy_rules_service_1 = require("./ld-strategy-rules.service");
let LdStrategyRulesModule = class LdStrategyRulesModule {
};
LdStrategyRulesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ld_strategy_rules_entity_1.LdStrategyRules])],
        controllers: [ld_strategy_rules_controller_1.LdStrategyRulesController],
        providers: [ld_strategy_rules_service_1.LdStrategyRulesService]
    })
], LdStrategyRulesModule);
exports.LdStrategyRulesModule = LdStrategyRulesModule;
//# sourceMappingURL=ld-strategy-rules.module.js.map
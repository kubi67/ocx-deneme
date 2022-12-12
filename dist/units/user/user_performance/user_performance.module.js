"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPerformanceModule = void 0;
const common_1 = require("@nestjs/common");
const user_performance_service_1 = require("./user_performance.service");
const user_performance_controller_1 = require("./user_performance.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_performance_entity_1 = require("../../../models/users/user_performance.entity");
let UserPerformanceModule = class UserPerformanceModule {
};
UserPerformanceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_performance_entity_1.UserPerformance])],
        providers: [user_performance_service_1.UserPerformanceService],
        controllers: [user_performance_controller_1.UserPerformanceController]
    })
], UserPerformanceModule);
exports.UserPerformanceModule = UserPerformanceModule;
//# sourceMappingURL=user_performance.module.js.map
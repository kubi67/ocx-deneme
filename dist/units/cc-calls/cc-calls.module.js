"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CcCallsModule = void 0;
const common_1 = require("@nestjs/common");
const cc_calls_service_1 = require("./cc-calls.service");
const cc_calls_controller_1 = require("./cc-calls.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cc_calls_entity_1 = require("../../models/ccs/cc_calls.entity");
let CcCallsModule = class CcCallsModule {
};
CcCallsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cc_calls_entity_1.CcCalls])],
        providers: [cc_calls_service_1.CcCallsService],
        controllers: [cc_calls_controller_1.CcCallsController]
    })
], CcCallsModule);
exports.CcCallsModule = CcCallsModule;
//# sourceMappingURL=cc-calls.module.js.map
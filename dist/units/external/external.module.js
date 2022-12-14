"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalModule = void 0;
const common_1 = require("@nestjs/common");
const external_service_1 = require("./external.service");
const external_controller_1 = require("./external.controller");
let ExternalModule = class ExternalModule {
};
ExternalModule = __decorate([
    (0, common_1.Module)({
        providers: [external_service_1.ExternalService],
        controllers: [external_controller_1.ExternalController]
    })
], ExternalModule);
exports.ExternalModule = ExternalModule;
//# sourceMappingURL=external.module.js.map
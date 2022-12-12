"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadSourceTypesModule = void 0;
const common_1 = require("@nestjs/common");
const lead_source_types_service_1 = require("./lead-source-types.service");
const lead_source_types_controller_1 = require("./lead-source-types.controller");
const lead_source_types_entity_1 = require("../../../models/leads/lead_source_types.entity");
const typeorm_1 = require("@nestjs/typeorm");
let LeadSourceTypesModule = class LeadSourceTypesModule {
};
LeadSourceTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lead_source_types_entity_1.LeadSourceTypes])],
        providers: [lead_source_types_service_1.LeadSourceTypesService],
        controllers: [lead_source_types_controller_1.LeadSourceTypesController]
    })
], LeadSourceTypesModule);
exports.LeadSourceTypesModule = LeadSourceTypesModule;
//# sourceMappingURL=lead-source-types.module.js.map
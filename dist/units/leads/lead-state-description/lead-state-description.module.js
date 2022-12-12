"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadStateDescriptionModule = void 0;
const common_1 = require("@nestjs/common");
const lead_state_description_service_1 = require("./lead-state-description.service");
const lead_state_description_controller_1 = require("./lead-state-description.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lead_state_descriptions_entity_1 = require("../../../models/leads/lead_state_descriptions.entity");
let LeadStateDescriptionModule = class LeadStateDescriptionModule {
};
LeadStateDescriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lead_state_descriptions_entity_1.LeadStatesDescriptions])],
        providers: [lead_state_description_service_1.LeadStateDescriptionService],
        controllers: [lead_state_description_controller_1.LeadStateDescriptionController],
    })
], LeadStateDescriptionModule);
exports.LeadStateDescriptionModule = LeadStateDescriptionModule;
//# sourceMappingURL=lead-state-description.module.js.map
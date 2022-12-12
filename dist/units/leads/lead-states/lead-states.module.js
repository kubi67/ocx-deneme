"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadStatesModule = void 0;
const common_1 = require("@nestjs/common");
const lead_states_service_1 = require("./lead-states.service");
const lead_states_controller_1 = require("./lead-states.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lead_states_entity_1 = require("../../../models/leads/lead_states.entity");
let LeadStatesModule = class LeadStatesModule {
};
LeadStatesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lead_states_entity_1.LeadStates])],
        providers: [lead_states_service_1.LeadStatesService],
        controllers: [lead_states_controller_1.LeadStatesController]
    })
], LeadStatesModule);
exports.LeadStatesModule = LeadStatesModule;
//# sourceMappingURL=lead-states.module.js.map
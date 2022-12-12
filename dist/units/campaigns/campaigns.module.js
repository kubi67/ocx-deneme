"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ad_campaigns_entity_1 = require("../../models/campaigns/ad_campaigns.entity");
const campaigns_controller_1 = require("./campaigns.controller");
const campaigns_service_1 = require("./campaigns.service");
let CampaignsModule = class CampaignsModule {
};
CampaignsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ad_campaigns_entity_1.Adcampaigns])],
        providers: [campaigns_service_1.AdCampaignsService],
        controllers: [campaigns_controller_1.AdCampaignsController]
    })
], CampaignsModule);
exports.CampaignsModule = CampaignsModule;
//# sourceMappingURL=campaigns.module.js.map
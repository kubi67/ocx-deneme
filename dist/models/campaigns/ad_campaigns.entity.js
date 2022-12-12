"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adcampaigns = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let Adcampaigns = class Adcampaigns extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 255 }),
    __metadata("design:type", String)
], Adcampaigns.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 15, scale: 4 }),
    __metadata("design:type", Number)
], Adcampaigns.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Adcampaigns.prototype, "arrival", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', default: null }),
    __metadata("design:type", String)
], Adcampaigns.prototype, "broker_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", String)
], Adcampaigns.prototype, "identifier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], Adcampaigns.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], Adcampaigns.prototype, "utm_source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], Adcampaigns.prototype, "utm_medium", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], Adcampaigns.prototype, "utm_campaign", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 128 }),
    __metadata("design:type", String)
], Adcampaigns.prototype, "utm_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 128 }),
    __metadata("design:type", String)
], Adcampaigns.prototype, "utm_term", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 8 }),
    __metadata("design:type", String)
], Adcampaigns.prototype, "currency_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Adcampaigns.prototype, "start_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Adcampaigns.prototype, "expire_at", void 0);
Adcampaigns = __decorate([
    (0, typeorm_1.Entity)({ name: 'ad_campaigns' })
], Adcampaigns);
exports.Adcampaigns = Adcampaigns;
//# sourceMappingURL=ad_campaigns.entity.js.map
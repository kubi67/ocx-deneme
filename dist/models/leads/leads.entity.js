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
exports.Leads = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let Leads = class Leads extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', default: null }),
    __metadata("design:type", String)
], Leads.prototype, "broker_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], Leads.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], Leads.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 128 }),
    __metadata("design:type", String)
], Leads.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64, default: '' }),
    __metadata("design:type", String)
], Leads.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', default: null }),
    __metadata("design:type", String)
], Leads.prototype, "assigned_broker", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', default: null }),
    __metadata("design:type", String)
], Leads.prototype, "preference_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', default: null }),
    __metadata("design:type", String)
], Leads.prototype, "source_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', default: null }),
    __metadata("design:type", String)
], Leads.prototype, "source_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], Leads.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], Leads.prototype, "contact_preference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', default: null }),
    __metadata("design:type", String)
], Leads.prototype, "campaign_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', default: null }),
    __metadata("design:type", String)
], Leads.prototype, "assigned_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Leads.prototype, "isDelivered", void 0);
Leads = __decorate([
    (0, typeorm_1.Entity)({ name: 'leads' })
], Leads);
exports.Leads = Leads;
//# sourceMappingURL=leads.entity.js.map
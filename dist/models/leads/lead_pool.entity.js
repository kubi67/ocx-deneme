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
exports.LeadPool = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let LeadPool = class LeadPool extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], LeadPool.prototype, "campaign_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], LeadPool.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], LeadPool.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 128 }),
    __metadata("design:type", String)
], LeadPool.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 128 }),
    __metadata("design:type", String)
], LeadPool.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], LeadPool.prototype, "assigned_broker", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], LeadPool.prototype, "assigned_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], LeadPool.prototype, "preference_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], LeadPool.prototype, "source_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], LeadPool.prototype, "source_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], LeadPool.prototype, "state", void 0);
LeadPool = __decorate([
    (0, typeorm_1.Entity)({ name: 'lead_pool' })
], LeadPool);
exports.LeadPool = LeadPool;
//# sourceMappingURL=lead_pool.entity.js.map
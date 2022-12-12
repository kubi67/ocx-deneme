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
exports.Brokers = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let Brokers = class Brokers extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 128 }),
    __metadata("design:type", String)
], Brokers.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 255 }),
    __metadata("design:type", String)
], Brokers.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 32 }),
    __metadata("design:type", String)
], Brokers.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'character varying',
        length: 255,
        default: 'https://www.market-research-companies.in//images/default.jpg',
    }),
    __metadata("design:type", String)
], Brokers.prototype, "imgUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 255 }),
    __metadata("design:type", String)
], Brokers.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Brokers.prototype, "affiliate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 255 }),
    __metadata("design:type", String)
], Brokers.prototype, "adress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Brokers.prototype, "country_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], Brokers.prototype, "city_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', default: null }),
    __metadata("design:type", String)
], Brokers.prototype, "state_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], Brokers.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], Brokers.prototype, "owner_id", void 0);
Brokers = __decorate([
    (0, typeorm_1.Entity)({ name: 'brokers' })
], Brokers);
exports.Brokers = Brokers;
//# sourceMappingURL=brokers.entity.js.map
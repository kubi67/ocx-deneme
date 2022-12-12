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
exports.CcCalls = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let CcCalls = class CcCalls extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], CcCalls.prototype, "cid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 18 }),
    __metadata("design:type", String)
], CcCalls.prototype, "caller_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], CcCalls.prototype, "duid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 18 }),
    __metadata("design:type", String)
], CcCalls.prototype, "called_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], CcCalls.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], CcCalls.prototype, "call_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], CcCalls.prototype, "call_end", void 0);
CcCalls = __decorate([
    (0, typeorm_1.Entity)({ name: 'cc_calls' })
], CcCalls);
exports.CcCalls = CcCalls;
//# sourceMappingURL=cc_calls.entity.js.map
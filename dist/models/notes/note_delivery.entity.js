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
exports.NoteDelivery = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let NoteDelivery = class NoteDelivery extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying' }),
    __metadata("design:type", String)
], NoteDelivery.prototype, "note_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying' }),
    __metadata("design:type", String)
], NoteDelivery.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], NoteDelivery.prototype, "delivered", void 0);
NoteDelivery = __decorate([
    (0, typeorm_1.Entity)({ name: 'note_delivery' })
], NoteDelivery);
exports.NoteDelivery = NoteDelivery;
//# sourceMappingURL=note_delivery.entity.js.map
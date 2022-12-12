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
exports.UserContact = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let UserContact = class UserContact extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], UserContact.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], UserContact.prototype, "contact_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 128 }),
    __metadata("design:type", Number)
], UserContact.prototype, "contact_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], UserContact.prototype, "status", void 0);
UserContact = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_contact' })
], UserContact);
exports.UserContact = UserContact;
//# sourceMappingURL=user_contact.entity.js.map
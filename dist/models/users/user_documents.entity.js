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
exports.UserDocuments = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
let UserDocuments = class UserDocuments extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 64 }),
    __metadata("design:type", String)
], UserDocuments.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], UserDocuments.prototype, "document_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'character varying', length: 500 }),
    __metadata("design:type", String)
], UserDocuments.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], UserDocuments.prototype, "approved", void 0);
UserDocuments = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_documents' })
], UserDocuments);
exports.UserDocuments = UserDocuments;
//# sourceMappingURL=user_documents.entity.js.map
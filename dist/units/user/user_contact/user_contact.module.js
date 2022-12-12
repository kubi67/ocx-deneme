"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_contact_entity_1 = require("../../../models/users/user_contact.entity");
const user_contact_controller_1 = require("./user_contact.controller");
const user_contact_service_1 = require("./user_contact.service");
let UserContactModule = class UserContactModule {
};
UserContactModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_contact_entity_1.UserContact])],
        providers: [user_contact_service_1.UserContactService],
        controllers: [user_contact_controller_1.UserContactController],
        exports: [user_contact_service_1.UserContactService],
    })
], UserContactModule);
exports.UserContactModule = UserContactModule;
//# sourceMappingURL=user_contact.module.js.map
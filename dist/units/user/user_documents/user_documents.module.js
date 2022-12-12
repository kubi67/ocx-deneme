"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocumentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_documents_entity_1 = require("../../../models/users/user_documents.entity");
const user_documents_controller_1 = require("./user_documents.controller");
const user_documents_service_1 = require("./user_documents.service");
let UserDocumentModule = class UserDocumentModule {
};
UserDocumentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_documents_entity_1.UserDocuments])],
        providers: [user_documents_service_1.UserDocumentService],
        controllers: [user_documents_controller_1.UserDocumentsController],
        exports: [user_documents_service_1.UserDocumentService],
    })
], UserDocumentModule);
exports.UserDocumentModule = UserDocumentModule;
//# sourceMappingURL=user_documents.module.js.map
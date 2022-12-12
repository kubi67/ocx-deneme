"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteDeliveryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const note_delivery_entity_1 = require("../../../models/notes/note_delivery.entity");
const note_delivery_controller_1 = require("./note_delivery.controller");
const note_delivery_service_1 = require("./note_delivery.service");
let NoteDeliveryModule = class NoteDeliveryModule {
};
NoteDeliveryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([note_delivery_entity_1.NoteDelivery])],
        controllers: [note_delivery_controller_1.NoteDeliveryController],
        providers: [note_delivery_service_1.NoteDeliveryService]
    })
], NoteDeliveryModule);
exports.NoteDeliveryModule = NoteDeliveryModule;
//# sourceMappingURL=note_delivery.module.js.map
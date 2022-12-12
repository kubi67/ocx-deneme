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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteDeliveryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const note_delivery_dto_1 = require("./note_delivery.dto");
const note_delivery_service_1 = require("./note_delivery.service");
let NoteDeliveryController = class NoteDeliveryController {
    constructor(noteDeliveriesService) {
        this.noteDeliveriesService = noteDeliveriesService;
    }
    async getAll() {
        return await this.noteDeliveriesService.getAll();
    }
    async getAllByStatus(status) {
        return await this.noteDeliveriesService.getAllByStatus(status);
    }
    async get(id) {
        return await this.noteDeliveriesService.getById(id);
    }
    async getLeadsFull() {
        return await this.noteDeliveriesService.getAllWithAll();
    }
    async getByNote(id) {
        return await this.noteDeliveriesService.getByNote(id);
    }
    async getByUser(id) {
        return await this.noteDeliveriesService.getByUser(id);
    }
    async update(id, dto) {
        return await this.noteDeliveriesService.update(id, dto);
    }
    async softDelete(id) {
        return await this.noteDeliveriesService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.noteDeliveriesService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoteDeliveryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], NoteDeliveryController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteDeliveryController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/active-leads/:status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoteDeliveryController.prototype, "getLeadsFull", null);
__decorate([
    (0, common_1.Get)('/get-by-note/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteDeliveryController.prototype, "getByNote", null);
__decorate([
    (0, common_1.Get)('/get-by-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteDeliveryController.prototype, "getByUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, note_delivery_dto_1.NoteDeliveryDTO]),
    __metadata("design:returntype", Promise)
], NoteDeliveryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteDeliveryController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteDeliveryController.prototype, "hardDelete", null);
NoteDeliveryController = __decorate([
    (0, common_1.Controller)('note-delivery'),
    (0, swagger_1.ApiTags)('Note Delivery Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [note_delivery_service_1.NoteDeliveryService])
], NoteDeliveryController);
exports.NoteDeliveryController = NoteDeliveryController;
//# sourceMappingURL=note_delivery.controller.js.map
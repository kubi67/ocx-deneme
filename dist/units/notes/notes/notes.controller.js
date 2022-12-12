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
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const notes_dto_1 = require("./notes.dto");
const notes_service_1 = require("./notes.service");
let NotesController = class NotesController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    async getAll() {
        return await this.noteService.getAll();
    }
    async getAllByStatus(status) {
        return await this.noteService.getAllByStatus(status);
    }
    async get(id) {
        return await this.noteService.getById(id);
    }
    async getLeadsFull() {
        return await this.noteService.getAllWithAll();
    }
    async getByAuthor(id) {
        return await this.noteService.getByAuthor(id);
    }
    async getByModelType(id) {
        return await this.noteService.getByModelType(id);
    }
    async getByModel(id) {
        return await this.noteService.getByModel(id);
    }
    async update(id, dto) {
        return await this.noteService.update(id, dto);
    }
    async softDelete(id) {
        return await this.noteService.softDelete(id);
    }
    async create(dto) {
        return await this.noteService.create(dto);
    }
    async hardDelete(id) {
        return await this.noteService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/active-leads/:status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getLeadsFull", null);
__decorate([
    (0, common_1.Get)('/get-by-author/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getByAuthor", null);
__decorate([
    (0, common_1.Get)('/get-by-model-type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getByModelType", null);
__decorate([
    (0, common_1.Get)('/get-by-model/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getByModel", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, notes_dto_1.NotesDTO]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notes_dto_1.NotesDTO]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "hardDelete", null);
NotesController = __decorate([
    (0, common_1.Controller)('notes'),
    (0, swagger_1.ApiTags)('Notes Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
exports.NotesController = NotesController;
//# sourceMappingURL=notes.controller.js.map
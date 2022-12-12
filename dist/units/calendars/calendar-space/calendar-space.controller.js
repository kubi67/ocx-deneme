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
exports.CalendarSpaceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const calendar_space_dto_1 = require("./calendar-space.dto");
const calendar_space_service_1 = require("./calendar-space.service");
let CalendarSpaceController = class CalendarSpaceController {
    constructor(calendarSpaceService) {
        this.calendarSpaceService = calendarSpaceService;
    }
    async getAll() {
        return await this.calendarSpaceService.getAll();
    }
    async getAllByStatus(status) {
        return await this.calendarSpaceService.getAllByStatus(status);
    }
    async getByCalendar(id) {
        return await this.calendarSpaceService.getByCalendar(id);
    }
    async getByOwner(id) {
        return await this.calendarSpaceService.getByOwner(id);
    }
    async getByIdentity(owner, calendar) {
        return await this.calendarSpaceService.getByIdentity(owner, calendar);
    }
    async get(id) {
        return await this.calendarSpaceService.getById(id);
    }
    async create(dto) {
        return await this.calendarSpaceService.create(dto);
    }
    async update(id, dto) {
        return await this.calendarSpaceService.update(id, dto);
    }
    async softDelete(id) {
        return await this.calendarSpaceService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.calendarSpaceService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-calendar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "getByCalendar", null);
__decorate([
    (0, common_1.Get)('/by-owner/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "getByOwner", null);
__decorate([
    (0, common_1.Get)('/by-identity/:owner/:calendar'),
    __param(0, (0, common_1.Param)('owner')),
    __param(1, (0, common_1.Param)('calendar')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "getByIdentity", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calendar_space_dto_1.CalendarSpaceDTO]),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, calendar_space_dto_1.CalendarSpaceDTO]),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarSpaceController.prototype, "hardDelete", null);
CalendarSpaceController = __decorate([
    (0, common_1.Controller)('calendar-space'),
    (0, swagger_1.ApiTags)('Calendar Space Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [calendar_space_service_1.CalendarSpaceService])
], CalendarSpaceController);
exports.CalendarSpaceController = CalendarSpaceController;
//# sourceMappingURL=calendar-space.controller.js.map
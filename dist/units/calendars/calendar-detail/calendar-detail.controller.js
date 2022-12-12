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
exports.CalendarDetailController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const calendar_detail_dto_1 = require("./calendar-detail.dto");
const calendar_detail_service_1 = require("./calendar-detail.service");
let CalendarDetailController = class CalendarDetailController {
    constructor(calendarDetailService) {
        this.calendarDetailService = calendarDetailService;
    }
    async getAll() {
        return await this.calendarDetailService.getAll();
    }
    async getAllByStatus(status) {
        return await this.calendarDetailService.getAllByStatus(status);
    }
    async getByCalendar(id) {
        return await this.calendarDetailService.getByCalendar(id);
    }
    async getByCalendarSpace(id) {
        return await this.calendarDetailService.getByCalendarSpace(id);
    }
    async get(id) {
        return await this.calendarDetailService.getById(id);
    }
    async create(dto) {
        return await this.calendarDetailService.create(dto);
    }
    async update(id, dto) {
        return await this.calendarDetailService.update(id, dto);
    }
    async softDelete(id) {
        return await this.calendarDetailService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.calendarDetailService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalendarDetailController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], CalendarDetailController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/by-calendar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarDetailController.prototype, "getByCalendar", null);
__decorate([
    (0, common_1.Get)('/by-calendar-space/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarDetailController.prototype, "getByCalendarSpace", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarDetailController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calendar_detail_dto_1.CalendarDetailDTO]),
    __metadata("design:returntype", Promise)
], CalendarDetailController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, calendar_detail_dto_1.CalendarDetailDTO]),
    __metadata("design:returntype", Promise)
], CalendarDetailController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarDetailController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalendarDetailController.prototype, "hardDelete", null);
CalendarDetailController = __decorate([
    (0, common_1.Controller)('calendar-detail'),
    (0, swagger_1.ApiTags)('Calendar Detail Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [calendar_detail_service_1.CalendarDetailService])
], CalendarDetailController);
exports.CalendarDetailController = CalendarDetailController;
//# sourceMappingURL=calendar-detail.controller.js.map
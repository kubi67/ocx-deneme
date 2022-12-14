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
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../libs/api-results/standart-results");
const reports_service_1 = require("./reports.service");
let ReportsController = class ReportsController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    async getReports(startDate, endDate, brokerID) {
        if (!brokerID && !startDate && !endDate) {
            return {
                MVPTrader: await this.reportService.getBestSalerOperatorWithoutDate(),
                BestSalerOperator: await this.reportService.getBestSalerOperatorWithoutDate(),
                Summaries: await this.reportService.getCountsWithoutDate(),
                PNL: await this.reportService.getPNL(),
                WidgetDatas: await this.reportService.getMockForTimeSeries(),
                TraderCountByOperator: await this.reportService.getTraderCountByOperator(brokerID),
            };
        }
        if (brokerID && !startDate && !endDate) {
            return {
                MVPTrader: await this.reportService.getBestSalerOperatorWithoutDate(brokerID),
                BestSalerOperator: await this.reportService.getBestSalerOperatorWithoutDate(brokerID),
                Summaries: await this.reportService.getCountsWithoutDate(brokerID),
                TraderCountByOperator: await this.reportService.getTraderCountByOperator(brokerID),
                PNL: await this.reportService.getPNL(),
                WidgetDatas: await this.reportService.getMockForTimeSeries(),
            };
        }
        return {
            MVPTrader: await this.reportService.getMostGainLeadTraders(),
            BestSalerOperator: await this.reportService.getBestSalerOperator(startDate, endDate, brokerID),
            Summaries: await this.reportService.getCounts(startDate, endDate, brokerID),
            TraderCountByOperator: await this.reportService.getTraderCountByOperator(brokerID),
            PNL: await this.reportService.getPNL(),
            WidgetDatas: await this.reportService.getMockForTimeSeries(),
        };
    }
    async getBestSaler(brokerID, startDate, endDate) {
        console.log(brokerID);
        if (brokerID && startDate && endDate) {
            return await this.reportService.getBestSalerOperator(startDate, endDate, brokerID);
        }
        if (brokerID && !startDate && !endDate) {
            return await this.reportService.getBestSalerOperator(brokerID);
        }
        if (brokerID && startDate && !endDate) {
            return await this.reportService.getBestSalerOperator(startDate, brokerID);
        }
        if (!brokerID && !startDate && !endDate) {
            return await this.reportService.getBestSalerOperator();
        }
        return await this.reportService.getBestSalerOperator(brokerID);
    }
    async getLeadsByCampaign(brokerID) {
        return await this.reportService.getLeadByCampaign(brokerID);
    }
    async getOperated(startDate, endDate, assignedID) {
        if (assignedID && !startDate && !endDate) {
            return {
                Operated: await this.reportService.getCountOperatedLeads(assignedID),
                Counts: await this.reportService.getCounts(startDate, endDate, assignedID),
                LastNote: await this.reportService.getLastNotesByLeadAndOperator(assignedID),
                PNL: await this.reportService.getPNL(),
                WidgetDatas: await this.reportService.getMockForTimeSeries(),
            };
        }
        if (assignedID && startDate && !endDate) {
            return {
                Operated: await this.reportService.getCountOperatedLeads(assignedID, startDate),
                Counts: await this.reportService.getCounts(startDate, endDate, assignedID),
                LastNote: await this.reportService.getLastNotesByLeadAndOperator(assignedID),
                PNL: await this.reportService.getPNL(),
                WidgetDatas: await this.reportService.getMockForTimeSeries(),
            };
        }
        return {
            Operated: await this.reportService.getCountOperatedLeads(assignedID, startDate, endDate),
            Counts: await this.reportService.getCounts(startDate, endDate, assignedID),
            LastNote: await this.reportService.getLastNotesByLeadAndOperator(assignedID),
            PNL: await this.reportService.getPNL(),
            WidgetDatas: await this.reportService.getMockForTimeSeries(),
        };
    }
    async getTraderByLocation(brokerID, city, country) {
        if (brokerID && country && city) {
            return await this.reportService.getTraderByLocation(country, city, brokerID);
        }
        if (brokerID && !country && city) {
            return await this.reportService.getTraderByLocation(country, city, brokerID);
        }
        if (brokerID && country && !city) {
            return await this.reportService.getTraderByLocation(country, city, brokerID);
        }
        if (brokerID && !country && !city) {
            return await this.reportService.getTraderByLocation(country, city, brokerID);
        }
        return await this.reportService.getTraderByLocation();
    }
    async getTeams(brokerID) {
        if (brokerID) {
            return await this.reportService.getTeamsByBroker(brokerID);
        }
        return await this.reportService.getTeamsByBroker();
    }
};
__decorate([
    (0, common_1.Get)('/get/:brokerID?/:startDate?/:endDate?'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __param(2, (0, common_1.Query)('brokerID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReports", null);
__decorate([
    (0, common_1.Get)('/best-saler/:brokerID?/:startDate?/:endDate?'),
    __param(0, (0, common_1.Query)('brokerID')),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getBestSaler", null);
__decorate([
    (0, common_1.Get)('/leads-by-campaign/:brokerID?'),
    __param(0, (0, common_1.Query)('brokerID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getLeadsByCampaign", null);
__decorate([
    (0, common_1.Get)('/get-operated/:assignedID?/:startDate?/:endDate?'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __param(2, (0, common_1.Query)('assignedID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getOperated", null);
__decorate([
    (0, common_1.Get)('/trader/trader-by-location/:brokerID?/:county?/:city?'),
    __param(0, (0, common_1.Query)('brokerID')),
    __param(1, (0, common_1.Query)('city')),
    __param(2, (0, common_1.Query)('country')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getTraderByLocation", null);
__decorate([
    (0, common_1.Get)('/get-teams/:brokerID?'),
    __param(0, (0, common_1.Query)('brokerID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getTeams", null);
ReportsController = __decorate([
    (0, common_1.Controller)('dash-reports'),
    (0, swagger_1.ApiTags)('Dash Reports Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
exports.ReportsController = ReportsController;
//# sourceMappingURL=reports.controller.js.map
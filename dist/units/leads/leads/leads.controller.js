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
exports.LeadsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const standart_results_1 = require("../../../libs/api-results/standart-results");
const leads_dto_1 = require("./leads.dto");
const leads_service_1 = require("./leads.service");
let LeadsController = class LeadsController {
    constructor(leadService) {
        this.leadService = leadService;
    }
    async getAll() {
        return await this.leadService.getAll();
    }
    async getAllByStatus(status) {
        return await this.leadService.getAllByStatus(status);
    }
    async get(id) {
        return await this.leadService.getById(id);
    }
    async getLeadsFull() {
        return await this.leadService.getAllWithAll();
    }
    async getDelivered() {
        return await this.leadService.getDeliveredLeads();
    }
    async getDeliveredByOperator(operator) {
        return await this.leadService.getDeliveredLeadsByOperator(operator);
    }
    async getDeliveredByTeam(teamID) {
        if (!teamID) {
            return await this.leadService.getDeliveredLeadsByTeam();
        }
        return await this.leadService.getDeliveredLeadsByTeam(teamID);
    }
    async getDeliveredFull() {
        return await this.leadService.getDeliveredLeadsFull();
    }
    async getLeadStats(operatorID) {
        return await this.leadService.getMyLeadStats(operatorID);
    }
    async getDeliveredFullByOperator(operator) {
        return await this.leadService.getDeliveredLeadsFullByOperator(operator);
    }
    async getDeliveredFullByLead(leadID) {
        return await this.leadService.getDeliveredLeadsFullByLead(leadID);
    }
    async getByCampaign(campaign) {
        return await this.leadService.getByCampaign(campaign);
    }
    async getByDelivery(delivery) {
        return await this.leadService.getByDelivered(delivery);
    }
    async getByOperator(operator) {
        return await this.leadService.getLeadsByOperator(operator);
    }
    async getByAssignedUser(assigned) {
        return await this.leadService.getByAssignedUser(assigned);
    }
    async getByBroker(broker) {
        return await this.leadService.getByBroker(broker);
    }
    async getByState(state) {
        return await this.leadService.getByState(state);
    }
    async create(dto) {
        return await this.leadService.create(dto);
    }
    async createByQuery(dto, id) {
        return await this.leadService.createSimpleManuel(dto, id);
    }
    async createByQueryMultiple(dto, id, count) {
        return await this.leadService.createSimpleMany(dto, id, count);
    }
    async update(id, dto) {
        return await this.leadService.update(id, dto);
    }
    async softDelete(id) {
        return await this.leadService.softDelete(id);
    }
    async hardDelete(id) {
        return await this.leadService.hardDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/by-status/:id'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getAllByStatus", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/full-leads/:status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeadsFull", null);
__decorate([
    (0, common_1.Get)('/get-delivered/:data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getDelivered", null);
__decorate([
    (0, common_1.Get)('/delivered-by-operator/:operator'),
    __param(0, (0, common_1.Param)('operator')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getDeliveredByOperator", null);
__decorate([
    (0, common_1.Get)('/delivered-by-team/:teamID?'),
    __param(0, (0, common_1.Query)('teamID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getDeliveredByTeam", null);
__decorate([
    (0, common_1.Get)('/get-delivered-full/:data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getDeliveredFull", null);
__decorate([
    (0, common_1.Get)('/get-lead-stats/:operatorID?'),
    __param(0, (0, common_1.Query)('operatorID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getLeadStats", null);
__decorate([
    (0, common_1.Get)('/delivered-full-by-operator/:operator'),
    __param(0, (0, common_1.Param)('operator')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getDeliveredFullByOperator", null);
__decorate([
    (0, common_1.Get)('/delivered-full-by-lead/:leadID'),
    __param(0, (0, common_1.Param)('leadID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getDeliveredFullByLead", null);
__decorate([
    (0, common_1.Get)('/get-by-campaign/:campaign'),
    __param(0, (0, common_1.Param)('campaign')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getByCampaign", null);
__decorate([
    (0, common_1.Get)('/get-by-delivery/:delivery'),
    __param(0, (0, common_1.Param)('delivery')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getByDelivery", null);
__decorate([
    (0, common_1.Get)('/get-by-operator/:operator'),
    __param(0, (0, common_1.Param)('operator')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getByOperator", null);
__decorate([
    (0, common_1.Get)('/get-by-assigned/:assigned'),
    __param(0, (0, common_1.Param)('assigned')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getByAssignedUser", null);
__decorate([
    (0, common_1.Get)('/get-by-broker/:broker'),
    __param(0, (0, common_1.Param)('broker')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getByBroker", null);
__decorate([
    (0, common_1.Get)('/get-by-state/:state'),
    __param(0, (0, common_1.Param)('state')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "getByState", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [leads_dto_1.LeadDTO]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/manuel/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [leads_dto_1.LeadDTO, String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "createByQuery", null);
__decorate([
    (0, common_1.Post)('/manuel-many/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [leads_dto_1.LeadDTO, String, Number]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "createByQueryMultiple", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, leads_dto_1.LeadDTO]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Delete)('/hard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LeadsController.prototype, "hardDelete", null);
LeadsController = __decorate([
    (0, common_1.Controller)('leads'),
    (0, swagger_1.ApiTags)('Leads Endpoints'),
    (0, common_1.UseInterceptors)(standart_results_1.TransformInterceptor),
    __metadata("design:paramtypes", [leads_service_1.LeadsService])
], LeadsController);
exports.LeadsController = LeadsController;
//# sourceMappingURL=leads.controller.js.map
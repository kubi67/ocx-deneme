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
exports.LeadsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const leads_entity_1 = require("../../../models/leads/leads.entity");
const roles_description_service_1 = require("../../roles/roles-description/roles-description.service");
const roles_service_1 = require("../../roles/roles/roles.service");
const role_user_service_1 = require("../../user/role_user/role_user.service");
const user_service_1 = require("../../user/user/user.service");
const typeorm_2 = require("typeorm");
const leads_dto_1 = require("./leads.dto");
let LeadsService = class LeadsService {
    constructor(repo, userService, roleService, userRoleService, roleDescriptionService) {
        this.repo = repo;
        this.userService = userService;
        this.roleService = roleService;
        this.userRoleService = userRoleService;
        this.roleDescriptionService = roleDescriptionService;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => leads_dto_1.LeadDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => leads_dto_1.LeadDTO.fromEntity(e)));
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => leads_dto_1.LeadDTO.fromEntity(e)));
    }
    async getDeliveredLeadsFull() {
        return await this.repo.query(`SELECT * FROM public."getDeliveredLeadsFull"
`);
    }
    async getDeliveredLeadsFullByOperator(operatorID) {
        return await this.repo
            .query(`SELECT * FROM public."getDeliveredLeadsFull" where assigned_user='${operatorID}'
`);
    }
    async getDeliveredLeads() {
        return await this.repo.query(`SELECT * FROM public."getDeliveredLeads"`);
    }
    async getDeliveredLeadsByOperator(operatorID) {
        return await this.repo
            .query(`SELECT * FROM public."getDeliveredLeads" where assigned_user='${operatorID}'
`);
    }
    async getLeadsByOperator(operatorID) {
        return await this.repo
            .find({ where: { assigned_user: operatorID } })
            .then((datas) => datas.map((e) => leads_dto_1.LeadDTO.fromEntity(e)));
    }
    async getByDelivered(delivered) {
        return await this.repo
            .find({ where: { isDelivered: delivered } })
            .then((datas) => datas.map((e) => leads_dto_1.LeadDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => leads_dto_1.LeadDTO.fromEntity(datas));
    }
    async create(dto) {
        return await this.repo
            .save(leads_dto_1.LeadDTO.toEntity(dto))
            .then((e) => leads_dto_1.LeadDTO.fromEntity(e));
    }
    async getByCampaign(campaign) {
        return await this.repo
            .find({ where: { campaign_id: campaign } })
            .then((datas) => datas.map((e) => leads_dto_1.LeadDTO.fromEntity(e)));
    }
    async getByAssignedUser(assigned) {
        return await this.repo
            .find({ where: { assigned_user: assigned } })
            .then((datas) => datas.map((e) => leads_dto_1.LeadDTO.fromEntity(e)));
    }
    async getByBroker(broker) {
        return await this.repo
            .find({ where: { broker_id: broker } })
            .then((datas) => datas.map((e) => leads_dto_1.LeadDTO.fromEntity(e)));
    }
    async getByState(state) {
        return await this.repo
            .find({ where: { state: state } })
            .then((datas) => datas.map((e) => leads_dto_1.LeadDTO.fromEntity(e)));
    }
    async createSimpleManuel(dto, id) {
        const userData = await this.userService.getById(id);
        const userRole = await this.userRoleService.getByUser(userData.id);
        const roles = await this.roleService.getById(userRole.role_id);
        const rolesDescription = await this.roleDescriptionService.getByRoleOne(roles.id);
        if (rolesDescription.name === 'lead.operator') {
            dto.broker_id = userData.current_broker_id;
            dto.assigned_user = userData.id;
        }
        if (rolesDescription.name === 'lead.team.manager') {
            dto.broker_id = userData.current_broker_id;
            dto.assigned_user = userData.id;
        }
        if (rolesDescription.name === 'lead.manager' ||
            rolesDescription.name === 'broker.manager') {
            dto.broker_id = userData.current_broker_id;
            dto.assigned_user = userData.id;
        }
        return await this.repo
            .save(leads_dto_1.LeadDTO.toEntity(dto))
            .then((e) => leads_dto_1.LeadDTO.fromEntity(e));
    }
    async createSimpleMany(dto, id, count) {
        for (let index = 0; index < count; index++) {
            const userData = await this.userService.getById(id);
            const userRole = await this.userRoleService.getByUser(userData.id);
            const roles = await this.roleService.getById(userRole.role_id);
            const rolesDescription = await this.roleDescriptionService.getByRoleOne(roles.id);
            if (rolesDescription.name === 'lead.operator') {
                dto.broker_id = userData.current_broker_id;
                dto.assigned_user = userData.id;
            }
            if (rolesDescription.name === 'lead.team.manager') {
                dto.broker_id = userData.current_broker_id;
                dto.assigned_user = userData.id;
            }
            if (rolesDescription.name === 'lead.manager' ||
                rolesDescription.name === 'broker.manager') {
                dto.broker_id = userData.current_broker_id;
                dto.assigned_user = userData.id;
            }
            return await this.repo
                .save(leads_dto_1.LeadDTO.toEntity(dto))
                .then((e) => leads_dto_1.LeadDTO.fromEntity(e));
        }
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = leads_dto_1.LeadDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async getAllWithAll() {
        const data = await this.repo.query(`SELECT * FROM public."getLeadsWithAll"`);
        return data;
    }
    async changeStatus(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = !findData.isDeleted;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = leads_dto_1.LeadDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = leads_dto_1.LeadDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
LeadsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(leads_entity_1.Leads)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UsersService,
        roles_service_1.RolesService,
        role_user_service_1.RoleUserService,
        roles_description_service_1.RolesDescriptionService])
], LeadsService);
exports.LeadsService = LeadsService;
//# sourceMappingURL=leads.service.js.map
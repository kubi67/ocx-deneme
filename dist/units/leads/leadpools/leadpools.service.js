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
exports.LeadpoolsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lead_pool_entity_1 = require("../../../models/leads/lead_pool.entity");
const typeorm_2 = require("typeorm");
const leadpools_dto_1 = require("./leadpools.dto");
let LeadpoolsService = class LeadpoolsService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e)));
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e)));
    }
    async getByBroker(broker) {
        return await this.repo
            .find({ where: { assigned_broker: broker } })
            .then((datas) => datas.map((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e)));
    }
    async getByAssignedUser(assigned) {
        return await this.repo
            .find({ where: { assigned_user: assigned } })
            .then((datas) => datas.map((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e)));
    }
    async getByPreferenceUser(preference) {
        return await this.repo
            .find({ where: { preference_user: preference } })
            .then((datas) => datas.map((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e)));
    }
    async getBySourceType(sourceType) {
        return await this.repo
            .find({ where: { source_type: sourceType } })
            .then((datas) => datas.map((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e)));
    }
    async getBySourceID(sourceID) {
        return await this.repo
            .find({ where: { source_id: sourceID } })
            .then((datas) => datas.map((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e)));
    }
    async getByState(state) {
        return await this.repo
            .find({ where: { state: state } })
            .then((datas) => datas.map((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => leadpools_dto_1.LeadPoolDTO.fromEntity(datas));
    }
    async create(dto) {
        return await this.repo
            .save(leadpools_dto_1.LeadPoolDTO.toEntity(dto))
            .then((e) => leadpools_dto_1.LeadPoolDTO.fromEntity(e));
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = leadpools_dto_1.LeadPoolDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async changeStatus(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = !findData.isDeleted;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = leadpools_dto_1.LeadPoolDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = leadpools_dto_1.LeadPoolDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
LeadpoolsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lead_pool_entity_1.LeadPool)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LeadpoolsService);
exports.LeadpoolsService = LeadpoolsService;
//# sourceMappingURL=leadpools.service.js.map
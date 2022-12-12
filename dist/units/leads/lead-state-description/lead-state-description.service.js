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
exports.LeadStateDescriptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lead_state_descriptions_entity_1 = require("../../../models/leads/lead_state_descriptions.entity");
const typeorm_2 = require("typeorm");
const lead_state_description_dto_1 = require("./lead-state-description.dto");
let LeadStateDescriptionService = class LeadStateDescriptionService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => lead_state_description_dto_1.LeadStateDescriptionDTO.fromEntity(e)));
    }
    async getByLanguage(language) {
        return await this.repo
            .find({ where: { language_id: language } })
            .then((datas) => datas.map((e) => lead_state_description_dto_1.LeadStateDescriptionDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => lead_state_description_dto_1.LeadStateDescriptionDTO.fromEntity(e)));
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => lead_state_description_dto_1.LeadStateDescriptionDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => lead_state_description_dto_1.LeadStateDescriptionDTO.fromEntity(datas));
    }
    async create(dto) {
        return await this.repo
            .save(lead_state_description_dto_1.LeadStateDescriptionDTO.toEntity(dto))
            .then((e) => lead_state_description_dto_1.LeadStateDescriptionDTO.fromEntity(e));
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = lead_state_description_dto_1.LeadStateDescriptionDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async changeStatus(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = !findData.isDeleted;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = lead_state_description_dto_1.LeadStateDescriptionDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = lead_state_description_dto_1.LeadStateDescriptionDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
LeadStateDescriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lead_state_descriptions_entity_1.LeadStatesDescriptions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LeadStateDescriptionService);
exports.LeadStateDescriptionService = LeadStateDescriptionService;
//# sourceMappingURL=lead-state-description.service.js.map
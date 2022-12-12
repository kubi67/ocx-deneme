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
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const teams_entity_1 = require("../../models/teams/teams.entity");
const typeorm_2 = require("typeorm");
const teams_dto_1 = require("./teams.dto");
let TeamsService = class TeamsService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => teams_dto_1.TeamsDTO.fromEntity(e)));
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => teams_dto_1.TeamsDTO.fromEntity(e)));
    }
    async getByBrokerID(id) {
        return await this.repo
            .find({ where: { broker_id: id } })
            .then((datas) => datas.map((e) => teams_dto_1.TeamsDTO.fromEntity(e)));
    }
    async getByName(name) {
        return await this.repo
            .find({ where: { name } })
            .then((datas) => datas.map((e) => teams_dto_1.TeamsDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => teams_dto_1.TeamsDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => teams_dto_1.TeamsDTO.fromEntity(datas));
    }
    async create(dto) {
        return await this.repo
            .save(teams_dto_1.TeamsDTO.toEntity(dto))
            .then((e) => teams_dto_1.TeamsDTO.fromEntity(e));
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = teams_dto_1.TeamsDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async changeStatus(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = !findData.isDeleted;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = teams_dto_1.TeamsDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = teams_dto_1.TeamsDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(teams_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeamsService);
exports.TeamsService = TeamsService;
//# sourceMappingURL=teams.service.js.map
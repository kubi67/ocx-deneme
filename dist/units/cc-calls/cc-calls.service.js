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
exports.CcCallsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cc_calls_entity_1 = require("../../models/ccs/cc_calls.entity");
const typeorm_2 = require("typeorm");
const cc_calls_dto_1 = require("./cc-calls.dto");
let CcCallsService = class CcCallsService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => cc_calls_dto_1.CcCallsDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => cc_calls_dto_1.CcCallsDTO.fromEntity(e)));
    }
    async getByCid(cid) {
        return await this.repo
            .find({ where: { cid } })
            .then((datas) => datas.map((e) => cc_calls_dto_1.CcCallsDTO.fromEntity(e)));
    }
    async getByDuid(duid) {
        return await this.repo
            .find({ where: { duid } })
            .then((datas) => datas.map((e) => cc_calls_dto_1.CcCallsDTO.fromEntity(e)));
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => cc_calls_dto_1.CcCallsDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => cc_calls_dto_1.CcCallsDTO.fromEntity(datas));
    }
    async create(dto) {
        return await this.repo
            .save(cc_calls_dto_1.CcCallsDTO.toEntity(dto))
            .then((e) => cc_calls_dto_1.CcCallsDTO.fromEntity(e));
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = cc_calls_dto_1.CcCallsDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async changeStatus(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = !findData.isDeleted;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = cc_calls_dto_1.CcCallsDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = cc_calls_dto_1.CcCallsDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
CcCallsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cc_calls_entity_1.CcCalls)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CcCallsService);
exports.CcCallsService = CcCallsService;
//# sourceMappingURL=cc-calls.service.js.map
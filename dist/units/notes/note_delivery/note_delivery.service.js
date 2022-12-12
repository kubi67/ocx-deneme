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
exports.NoteDeliveryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const note_delivery_entity_1 = require("../../../models/notes/note_delivery.entity");
const typeorm_2 = require("typeorm");
const note_delivery_dto_1 = require("./note_delivery.dto");
let NoteDeliveryService = class NoteDeliveryService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => note_delivery_dto_1.NoteDeliveryDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => note_delivery_dto_1.NoteDeliveryDTO.fromEntity(e)));
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => note_delivery_dto_1.NoteDeliveryDTO.fromEntity(e)));
    }
    async getByUser(id) {
        return await this.repo
            .find({ where: { user_id: id } })
            .then((datas) => datas.map((e) => note_delivery_dto_1.NoteDeliveryDTO.fromEntity(e)));
    }
    async getByNote(id) {
        return await this.repo
            .find({ where: { note_id: id } })
            .then((datas) => datas.map((e) => note_delivery_dto_1.NoteDeliveryDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => note_delivery_dto_1.NoteDeliveryDTO.fromEntity(datas));
    }
    async create(dto) {
        return await this.repo
            .save(note_delivery_dto_1.NoteDeliveryDTO.toEntity(dto))
            .then((e) => note_delivery_dto_1.NoteDeliveryDTO.fromEntity(e));
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = note_delivery_dto_1.NoteDeliveryDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
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
            const updatedData = note_delivery_dto_1.NoteDeliveryDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = note_delivery_dto_1.NoteDeliveryDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
NoteDeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_delivery_entity_1.NoteDelivery)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NoteDeliveryService);
exports.NoteDeliveryService = NoteDeliveryService;
//# sourceMappingURL=note_delivery.service.js.map
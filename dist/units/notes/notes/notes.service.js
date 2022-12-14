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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const notes_entity_1 = require("../../../models/notes/notes.entity");
const typeorm_2 = require("typeorm");
const notes_dto_1 = require("./notes.dto");
let NotesService = class NotesService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => notes_dto_1.NotesDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => notes_dto_1.NotesDTO.fromEntity(e)));
    }
    async getByLeadAndOperator(operatorID) {
        return await this.repo
            .find({ where: { model_id: operatorID } })
            .then((datas) => datas.map((e) => notes_dto_1.NotesDTO.fromEntity(e)));
    }
    async getMyNotes(userID) {
        if (userID) {
            return await this.repo
                .query(`select notes.id as note_id, notes.author_id, notes.model_id as note_target, notes.created_at as note_created_at,
notes.note,
u.id as author_user_id, u.firstname as author_name, u.lastname as author_lastname
from notes
INNER JOIN public."user" u ON u.id::uuid = notes.author_id::uuid
Where model_id='${userID}'`);
        }
        return new rxjs_1.NotFoundError('User ID musnt null!');
    }
    async getMyLeadNotes(authorID) {
        if (!authorID) {
            return "User ID can't be empty!";
        }
        return await this.repo
            .query(`select notes.id as note_id, notes.author_id, notes.model_id as note_target, notes.created_at as note_created_at,
notes.note,
u.id as author_user_id, u.firstname as author_name, u.lastname as author_lastname
from notes
INNER JOIN public."leads" u ON u.id::uuid = notes.model_id::uuid
Where author_id='${authorID}'::uuid`);
    }
    async getMyUserNotes(authorID) {
        if (!authorID) {
            return "User ID can't be empty!";
        }
        return await this.repo
            .query(`select notes.id as note_id, notes.author_id, notes.model_id as note_target, notes.created_at as note_created_at,
notes.note,
u.id as author_user_id, u.firstname as author_name, u.lastname as author_lastname
from notes
INNER JOIN public."user" u ON u.id::uuid = notes.model_id::uuid
Where author_id='${authorID}'`);
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => notes_dto_1.NotesDTO.fromEntity(e)));
    }
    async getByAuthor(id) {
        return await this.repo
            .find({ where: { author_id: id } })
            .then((datas) => datas.map((e) => notes_dto_1.NotesDTO.fromEntity(e)));
    }
    async getByModelType(id) {
        return await this.repo
            .find({ where: { model_type: id } })
            .then((datas) => datas.map((e) => notes_dto_1.NotesDTO.fromEntity(e)));
    }
    async getByModel(id) {
        return await this.repo
            .find({ where: { model_id: id } })
            .then((datas) => datas.map((e) => notes_dto_1.NotesDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => notes_dto_1.NotesDTO.fromEntity(datas));
    }
    async create(dto) {
        return await this.repo
            .save(notes_dto_1.NotesDTO.toEntity(dto))
            .then((e) => notes_dto_1.NotesDTO.fromEntity(e));
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = notes_dto_1.NotesDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
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
            const updatedData = notes_dto_1.NotesDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = notes_dto_1.NotesDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notes_entity_1.Notes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map
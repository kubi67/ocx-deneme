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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../models/users/user.entity");
const typeorm_2 = require("typeorm");
const user_dto_1 = require("./user.dto");
const bcrypt = require("bcrypt");
const role_user_service_1 = require("../role_user/role_user.service");
const perm_user_service_1 = require("../perm_user/perm_user.service");
const roles_permissions_service_1 = require("../../roles/roles_permissions/roles_permissions.service");
let UsersService = class UsersService {
    constructor(repo, userRoleService, permUserService, rolePermService) {
        this.repo = repo;
        this.userRoleService = userRoleService;
        this.permUserService = permUserService;
        this.rolePermService = rolePermService;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => user_dto_1.UserDTO.fromEntity(e)));
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => user_dto_1.UserDTO.fromEntity(e)));
    }
    async getOperators() {
        return await this.repo
            .find({ where: { isLeadOperator: true } })
            .then((datas) => datas.map((e) => user_dto_1.UserDTO.fromEntity(e)));
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => user_dto_1.UserDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => user_dto_1.UserDTO.fromEntity(datas));
    }
    async getByBrokerUser() {
        const query = (0, typeorm_2.createQueryBuilder)('user', 'u').innerJoinAndSelect('u.watchers', 'w');
        const result = await query.getMany();
    }
    async getByVerified(verified) {
        return await this.repo
            .find({ where: { isVerified: verified } })
            .then((datas) => datas.map((e) => user_dto_1.UserDTO.fromEntity(e)));
    }
    async getTraderUser() {
        return await this.repo.query(`SELECT * FROM public."getTraderUser"`);
    }
    async getByApproved(approved) {
        return await this.repo
            .find({ where: { isApproved: approved } })
            .then((datas) => datas.map((e) => user_dto_1.UserDTO.fromEntity(e)));
    }
    async create(dto) {
        dto.password = await bcrypt.hash(dto.password, 5);
        const savedUser = await this.repo
            .save(user_dto_1.UserDTO.toEntity(dto))
            .then((e) => user_dto_1.UserDTO.fromEntity(e));
        const getPermsByRole = await this.rolePermService.getPermsByRole(dto.role_id);
        const permArr = Array();
        const saveRole = await this.userRoleService.create({
            id: savedUser.id,
            user_id: savedUser.id,
            role_id: dto.role_id,
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: new Date(),
            assigned_at: new Date(),
            assigned_by: '',
            lastChangedDateTime: new Date(),
            isDeleted: false,
        });
        getPermsByRole.map(async (perm) => {
            const saveUserPerm = await this.permUserService.create({
                user_id: savedUser.id,
                permission_id: perm.permission_id,
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: new Date(),
                id: '',
                assigned_at: new Date(),
                assigned_by: '',
                lastChangedDateTime: new Date(),
                isDeleted: false,
            });
        });
        return savedUser;
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = user_dto_1.UserDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async changeStatus(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = !findData.isDeleted;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = user_dto_1.UserDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = user_dto_1.UserDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        role_user_service_1.RoleUserService,
        perm_user_service_1.PermUserService,
        roles_permissions_service_1.RolePermissionsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map
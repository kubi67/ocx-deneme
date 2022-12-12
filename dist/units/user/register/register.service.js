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
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../models/users/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const register_dto_1 = require("./register.dto");
const mailer_service_1 = require("../../../scripts/mailer-scripts/mailer.service");
let RegisterService = class RegisterService {
    constructor(repo, mailService) {
        this.repo = repo;
        this.mailService = mailService;
    }
    async register(dto) {
        const userByMail = await this.repo
            .createQueryBuilder('user')
            .select('COUNT (*)', 'count')
            .where('user.email = :name', { name: `${dto.email}` })
            .getCount();
        const userByUserName = await this.repo
            .createQueryBuilder('user')
            .select('COUNT (*)', 'count')
            .where('user.username = :name', { name: `${dto.username}` })
            .getCount();
        if (userByUserName > 0 || userByMail > 0) {
            throw new common_1.BadRequestException(dto.email, 'This user is already registered');
        }
        else {
            dto.password = await bcrypt.hash(dto.password, 5);
            dto.two_factor_recover_code = '';
            dto.two_factor_secret = '';
            dto.isApproved = false;
            dto.isVerified = false;
            const result = await this.repo
                .save(dto)
                .then((e) => register_dto_1.RegisterUsersDTO.fromEntity(e));
            this.mailService.sendMail(`${dto.email}`, 'Kullanıcı Doğrulama', '', `Sn.${dto.firstname} ${dto.lastname}`, 'overcodex.com', 'Bilgilendirme - Email Kullanıcı Doğrulama', 'Aşağıda ki bağlantıyı tıklayarak hesabınızı doğrulayabilirsiniz.', `${result.id}`);
            return result;
        }
    }
    async registerUser(dto) {
        const userByMail = await this.repo
            .createQueryBuilder('user')
            .select('COUNT (*)', 'count')
            .where('user.email = :name', { name: `${dto.email}` })
            .getCount();
        const userByUserName = await this.repo
            .createQueryBuilder('user')
            .select('COUNT (*)', 'count')
            .where('user.username = :name', { name: `${dto.username}` })
            .getCount();
        if (userByUserName > 0 || userByMail > 0) {
            throw new common_1.BadRequestException(dto.email, 'This user is already registered');
        }
        else {
            dto.password = await bcrypt.hash(dto.password, 5);
            dto.two_factor_recover_code = '';
            dto.two_factor_secret = '';
            return await this.repo
                .save(dto)
                .then((e) => register_dto_1.RegisterUsersDTO.fromEntity(e));
        }
    }
};
RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_service_1.SendMailService])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map
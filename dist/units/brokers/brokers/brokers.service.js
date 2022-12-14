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
exports.BrokersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brokers_entity_1 = require("../../../models/brokers/brokers.entity");
const broker_user_entity_1 = require("../../../models/brokers/broker_user.entity");
const user_service_1 = require("../../user/user/user.service");
const typeorm_2 = require("typeorm");
const broker_user_service_1 = require("../broker_user/broker_user.service");
const broker_dto_1 = require("./broker.dto");
let BrokersService = class BrokersService {
    constructor(repo, brokerUserRepo, userService, brokerUserService) {
        this.repo = repo;
        this.brokerUserRepo = brokerUserRepo;
        this.userService = userService;
        this.brokerUserService = brokerUserService;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((datas) => datas.map((e) => broker_dto_1.BrokerDTO.fromEntity(e)));
    }
    async getOperatorByBroker(brokerID) {
        if (brokerID) {
            return await this.repo
                .query(`SELECT * FROM public."getOperatorByBroker" where "broker_id"='${brokerID}'
`);
        }
        return await this.repo.query(`SELECT * FROM public."getOperatorByBroker"
`);
    }
    async getAllByStatus(status) {
        return await this.repo
            .find({ where: { isDeleted: status } })
            .then((datas) => datas.map((e) => broker_dto_1.BrokerDTO.fromEntity(e)));
    }
    async getByIdMany(id) {
        return await this.repo
            .find({ where: { id: id } })
            .then((datas) => datas.map((e) => broker_dto_1.BrokerDTO.fromEntity(e)));
    }
    async getById(id) {
        return await this.repo
            .findOne({ where: { id: id } })
            .then((datas) => broker_dto_1.BrokerDTO.fromEntity(datas));
    }
    async getByOwner(ownerID) {
        return await this.repo
            .find({ where: { owner_id: ownerID } })
            .then((datas) => datas.map((e) => broker_dto_1.BrokerDTO.fromEntity(e)));
    }
    async getByCountry(country) {
        return await this.repo
            .find({ where: { country_id: country } })
            .then((datas) => datas.map((e) => broker_dto_1.BrokerDTO.fromEntity(e)));
    }
    async getByCity(city) {
        return await this.repo
            .find({ where: { city_id: city } })
            .then((datas) => datas.map((e) => broker_dto_1.BrokerDTO.fromEntity(e)));
    }
    async getSimpleAllBrokers() {
        const data = this.brokerUserRepo
            .query(`SELECT * FROM public."getSimpleAllBrokers"
      `);
        return data;
    }
    async getSimpleBrokerByID(id) {
        const data = this.brokerUserRepo
            .query(`SELECT * FROM public."getSimpleAllBrokers" where broker_id='${id}'
      `);
        return data;
    }
    async getSimpleAllBrokerManager() {
        const data = this.brokerUserRepo.query(`SELECT * FROM public."getSimpleBrokerManager"`);
        console.log(data);
        return data;
    }
    async getSimpleBrokerManagerByID(id) {
        const data = this.brokerUserRepo
            .query(`SELECT * FROM public."getSimpleBrokerManager" where broker_id='${id}'
    `);
        return data;
    }
    async create(dto) {
        return await this.repo
            .save(broker_dto_1.BrokerDTO.toEntity(dto))
            .then((e) => broker_dto_1.BrokerDTO.fromEntity(e));
    }
    async update(id, dto) {
        const tryUpdate = await this.repo.update(id, dto);
        if (tryUpdate.affected > 0) {
            const updatedData = broker_dto_1.BrokerDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async changeStatus(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = !findData.isDeleted;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = broker_dto_1.BrokerDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async softDelete(id) {
        const findData = await this.repo.findOne({ where: { id: id } });
        findData.isDeleted = true;
        const tryUpdate = await this.repo.update(id, findData);
        if (tryUpdate.affected > 0) {
            const updatedData = broker_dto_1.BrokerDTO.fromEntity(await this.repo.findOne({ where: { id: id } }));
            return updatedData;
        }
    }
    async hardDelete(id) {
        return await this.repo.delete(id);
    }
};
BrokersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brokers_entity_1.Brokers)),
    __param(1, (0, typeorm_1.InjectRepository)(broker_user_entity_1.BrokerUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        user_service_1.UsersService,
        broker_user_service_1.BrokerUserService])
], BrokersService);
exports.BrokersService = BrokersService;
//# sourceMappingURL=brokers.service.js.map
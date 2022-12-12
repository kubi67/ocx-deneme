import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { BrokerUser } from 'src/models/brokers/broker_user.entity';
import { UsersService } from 'src/units/user/user/user.service';
import { createQueryBuilder, Repository } from 'typeorm';
import { BrokerUserService } from '../broker_user/broker_user.service';
import { BrokerDTO } from './broker.dto';

@Injectable()
export class BrokersService {
  constructor(
    @InjectRepository(Brokers)
    private readonly repo: Repository<Brokers>,
    @InjectRepository(BrokerUser)
    private readonly brokerUserRepo: Repository<BrokerUser>,
    private readonly userService: UsersService,
    private readonly brokerUserService: BrokerUserService,
  ) {}

  public async getAll(): Promise<BrokerDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => BrokerDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<BrokerDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => BrokerDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<BrokerDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => BrokerDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<BrokerDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => BrokerDTO.fromEntity(datas));
  }

  public async getByOwner(ownerID: string): Promise<BrokerDTO[]> {
    return await this.repo
      .find({ where: { owner_id: ownerID } })
      .then((datas) => datas.map((e) => BrokerDTO.fromEntity(e)));
  }

  public async getByCountry(country: number): Promise<BrokerDTO[]> {
    return await this.repo
      .find({ where: { country_id: country } })
      .then((datas) => datas.map((e) => BrokerDTO.fromEntity(e)));
  }

  public async getByCity(city: number): Promise<BrokerDTO[]> {
    return await this.repo
      .find({ where: { city_id: city } })
      .then((datas) => datas.map((e) => BrokerDTO.fromEntity(e)));
  }

  // Burası user_broker operasyonları yazılınca tamamlanacak
  // user_broker tablosunda broker-id ve user-id yer alıyor
  // bu yüzden dolayı users ve broker tabloları arası join işlemlerini
  // user_broker tablosunda ki id bilgilerini baz alarak yapacağız.
  // Bu kod blokları yanlızca bütün brokerları döndürür, broker managerleri değil.

  public async getSimpleAllBrokers(): Promise<any> {
    const data = this.brokerUserRepo
      .query(`SELECT * FROM public."getSimpleAllBrokers"
      `);

    return data;
  }

  public async getSimpleBrokerByID(id: string): Promise<any> {
    const data = this.brokerUserRepo
      .query(`SELECT * FROM public."getSimpleAllBrokers" where broker_id='${id}'
      `);

    return data;
  }

  public async getSimpleAllBrokerManager(): Promise<any> {
    const data = this.brokerUserRepo.query(
      `SELECT * FROM public."getSimpleBrokerManager"`,
    );

    console.log(data);

    return data;
  }

  public async getSimpleBrokerManagerByID(id: string): Promise<any> {
    const data = this.brokerUserRepo
    .query(`SELECT * FROM public."getSimpleBrokerManager" where broker_id='${id}'
    `);
    return data;
  }

  public async create(dto: BrokerDTO): Promise<BrokerDTO> {
    return await this.repo
      .save(BrokerDTO.toEntity(dto))
      .then((e) => BrokerDTO.fromEntity(e));
  }

  public async update(id: string, dto: BrokerDTO): Promise<BrokerDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = BrokerDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<BrokerDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = BrokerDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<BrokerDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = BrokerDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

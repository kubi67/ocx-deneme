import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LdStrategy } from 'src/models/deliveries/ld_strategy.entity';
import { Repository } from 'typeorm';
import { LdStrategyDTO } from './ld-strategy.dto';

@Injectable()
export class LdStrategyService {
  constructor(
    @InjectRepository(LdStrategy)
    private readonly repo: Repository<LdStrategy>,
  ) {}

  public async getAll(): Promise<LdStrategyDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LdStrategyDTO.fromEntity(e)));
  }

  public async getByName(name: string): Promise<LdStrategyDTO[]> {
    return await this.repo
      .find({ where: { name } })
      .then((datas) => datas.map((e) => LdStrategyDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<LdStrategyDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => LdStrategyDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<LdStrategyDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => LdStrategyDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<LdStrategyDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => LdStrategyDTO.fromEntity(datas));
  }

  public async create(dto: LdStrategyDTO): Promise<LdStrategyDTO> {
    return await this.repo
      .save(LdStrategyDTO.toEntity(dto))
      .then((e) => LdStrategyDTO.fromEntity(e));
  }

  public async update(id: string, dto: LdStrategyDTO): Promise<LdStrategyDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = LdStrategyDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<LdStrategyDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LdStrategyDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<LdStrategyDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LdStrategyDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

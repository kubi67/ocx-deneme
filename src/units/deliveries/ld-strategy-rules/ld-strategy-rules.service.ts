import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LdStrategyRules } from 'src/models/deliveries/ld_strategy_rules.entity';
import { Repository } from 'typeorm';
import { LdStrategyRulesDTO } from './ld-strategy-rules.dto';


@Injectable()
export class LdStrategyRulesService {
  constructor(
    @InjectRepository(LdStrategyRules)
    private readonly repo: Repository<LdStrategyRules>,
  ) {}

  public async getAll(): Promise<LdStrategyRulesDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LdStrategyRulesDTO.fromEntity(e)));
  }

  public async getByLdStrategy(ldStrategy: string): Promise<LdStrategyRulesDTO[]> {
    return await this.repo
      .find({ where: { ld_strategy_id: ldStrategy } })
      .then((datas) => datas.map((e) => LdStrategyRulesDTO.fromEntity(e)));
  }

  public async getByLdRule(ldRule: string): Promise<LdStrategyRulesDTO[]> {
    return await this.repo
      .find({ where: { ld_rule_id: ldRule } })
      .then((datas) => datas.map((e) => LdStrategyRulesDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<LdStrategyRulesDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => LdStrategyRulesDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<LdStrategyRulesDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => LdStrategyRulesDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<LdStrategyRulesDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => LdStrategyRulesDTO.fromEntity(datas));
  }

  public async create(dto: LdStrategyRulesDTO): Promise<LdStrategyRulesDTO> {
    return await this.repo
      .save(LdStrategyRulesDTO.toEntity(dto))
      .then((e) => LdStrategyRulesDTO.fromEntity(e));
  }

  public async update(id: string, dto: LdStrategyRulesDTO): Promise<LdStrategyRulesDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = LdStrategyRulesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<LdStrategyRulesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LdStrategyRulesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<LdStrategyRulesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LdStrategyRulesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

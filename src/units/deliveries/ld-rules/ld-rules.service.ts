import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LdRules } from 'src/models/deliveries/ld_rules.entity';
import { Repository } from 'typeorm';
import { LdRulesDTO } from './ld-rules.dto';

@Injectable()
export class LdRulesService {
  constructor(
    @InjectRepository(LdRules)
    private readonly repo: Repository<LdRules>,
  ) {}

  public async getAll(): Promise<LdRulesDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LdRulesDTO.fromEntity(e)));
  }

  public async getByName(name: string): Promise<LdRulesDTO[]> {
    return await this.repo
      .find({ where: { name } })
      .then((datas) => datas.map((e) => LdRulesDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<LdRulesDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => LdRulesDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<LdRulesDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => LdRulesDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<LdRulesDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => LdRulesDTO.fromEntity(datas));
  }

  public async create(dto: LdRulesDTO): Promise<LdRulesDTO> {
    return await this.repo
      .save(LdRulesDTO.toEntity(dto))
      .then((e) => LdRulesDTO.fromEntity(e));
  }

  public async update(id: string, dto: LdRulesDTO): Promise<LdRulesDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = LdRulesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<LdRulesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LdRulesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<LdRulesDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LdRulesDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

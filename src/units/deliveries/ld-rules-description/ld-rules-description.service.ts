import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LdRulesDescription } from 'src/models/deliveries/ld_rules_description.entity';
import { Repository } from 'typeorm';
import { LdRulesDescriptionDTO } from './ld-rules-description.dto';

@Injectable()
export class LdRulesDescriptionService {
  constructor(
    @InjectRepository(LdRulesDescription)
    private readonly repo: Repository<LdRulesDescription>,
  ) {}

  public async getAll(): Promise<LdRulesDescriptionDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LdRulesDescriptionDTO.fromEntity(e)));
  }

  public async getByLang(langID: string): Promise<LdRulesDescriptionDTO[]> {
    return await this.repo
      .find({ where: { language_id: langID } })
      .then((datas) => datas.map((e) => LdRulesDescriptionDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<LdRulesDescriptionDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => LdRulesDescriptionDTO.fromEntity(e)));
  }

  public async getAllByStatus(
    status: boolean,
  ): Promise<LdRulesDescriptionDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => LdRulesDescriptionDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<LdRulesDescriptionDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => LdRulesDescriptionDTO.fromEntity(datas));
  }

  public async create(
    dto: LdRulesDescriptionDTO,
  ): Promise<LdRulesDescriptionDTO> {
    return await this.repo
      .save(LdRulesDescriptionDTO.toEntity(dto))
      .then((e) => LdRulesDescriptionDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: LdRulesDescriptionDTO,
  ): Promise<LdRulesDescriptionDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = LdRulesDescriptionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<LdRulesDescriptionDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LdRulesDescriptionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<LdRulesDescriptionDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = LdRulesDescriptionDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

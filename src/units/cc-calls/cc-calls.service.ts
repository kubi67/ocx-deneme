import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CcCalls } from 'src/models/ccs/cc_calls.entity';
import { Repository } from 'typeorm';
import { CcCallsDTO } from './cc-calls.dto';


@Injectable()
export class CcCallsService {
  constructor(
    @InjectRepository(CcCalls)
    private readonly repo: Repository<CcCalls>,
  ) {}

  public async getAll(): Promise<CcCallsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => CcCallsDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<CcCallsDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => CcCallsDTO.fromEntity(e)));
  }

  public async getByCid(cid: string): Promise<CcCallsDTO[]> {
    return await this.repo
      .find({ where: { cid } })
      .then((datas) => datas.map((e) => CcCallsDTO.fromEntity(e)));
  }

  public async getByDuid(duid: string): Promise<CcCallsDTO[]> {
    return await this.repo
      .find({ where: { duid } })
      .then((datas) => datas.map((e) => CcCallsDTO.fromEntity(e)));
  }


  public async getByIdMany(id: string): Promise<CcCallsDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => CcCallsDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<CcCallsDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => CcCallsDTO.fromEntity(datas));
  }

  public async create(dto: CcCallsDTO): Promise<CcCallsDTO> {
    return await this.repo
      .save(CcCallsDTO.toEntity(dto))
      .then((e) => CcCallsDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: CcCallsDTO,
  ): Promise<CcCallsDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = CcCallsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<CcCallsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = CcCallsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<CcCallsDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = CcCallsDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

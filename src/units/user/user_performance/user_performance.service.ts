import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPerformance } from 'src/models/users/user_performance.entity';
import { Repository } from 'typeorm';
import { UserPerformanceDTO } from './user_performance.dto';

@Injectable()
export class UserPerformanceService {
  constructor(
    @InjectRepository(UserPerformance)
    private readonly repo: Repository<UserPerformance>,
  ) {}

  public async getAll(): Promise<UserPerformanceDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => UserPerformanceDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<UserPerformanceDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => UserPerformanceDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<UserPerformanceDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => UserPerformanceDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<UserPerformanceDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => UserPerformanceDTO.fromEntity(datas));
  }

  public async getByAssignedBy(assignedBy: string): Promise<UserPerformanceDTO[]> {
    return await this.repo
      .find({ where: { assigned_by: assignedBy } })
      .then((datas) => datas.map((e) => UserPerformanceDTO.fromEntity(e)));
  }

  public async getByUser(userID: string): Promise<UserPerformanceDTO[]> {
    return await this.repo
      .find({ where: { user_id: userID } })
      .then((datas) => datas.map((e) => UserPerformanceDTO.fromEntity(e)));
  }

  

  public async create(dto: UserPerformanceDTO): Promise<UserPerformanceDTO> {
    return await this.repo
      .save(UserPerformanceDTO.toEntity(dto))
      .then((e) => UserPerformanceDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: UserPerformanceDTO,
  ): Promise<UserPerformanceDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = UserPerformanceDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<UserPerformanceDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserPerformanceDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<UserPerformanceDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserPerformanceDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

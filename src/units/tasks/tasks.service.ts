import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from 'src/models/task/tasks.entity';
import { Repository } from 'typeorm';
import { TasksDTO } from './tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private readonly repo: Repository<Tasks>,
  ) {}

  public async getAll(): Promise<TasksDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => TasksDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<TasksDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => TasksDTO.fromEntity(e)));
  }

  public async getByOwnerID(id: string): Promise<TasksDTO[]> {
    return await this.repo
      .find({ where: { owner_id: id } })
      .then((datas) => datas.map((e) => TasksDTO.fromEntity(e)));
  }

  public async getByName(name: string): Promise<TasksDTO[]> {
    return await this.repo
      .find({ where: { name } })
      .then((datas) => datas.map((e) => TasksDTO.fromEntity(e)));
  }

  public async getByAssigned(assigned: string): Promise<TasksDTO[]> {
    return await this.repo
      .find({ where: { assigned_user: assigned } })
      .then((datas) => datas.map((e) => TasksDTO.fromEntity(e)));
  }

  public async getByOwnered(ownered: boolean): Promise<TasksDTO[]> {
    return await this.repo
      .find({ where: { sys_ownered: ownered } })
      .then((datas) => datas.map((e) => TasksDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<TasksDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => TasksDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<TasksDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => TasksDTO.fromEntity(datas));
  }

  public async create(dto: TasksDTO): Promise<TasksDTO> {
    return await this.repo
      .save(TasksDTO.toEntity(dto))
      .then((e) => TasksDTO.fromEntity(e));
  }

  public async update(id: string, dto: TasksDTO): Promise<TasksDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = TasksDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<TasksDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = TasksDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<TasksDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = TasksDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

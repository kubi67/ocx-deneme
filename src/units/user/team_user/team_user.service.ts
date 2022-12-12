import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamUser } from 'src/models/users/team_user.entity';
import { Repository } from 'typeorm';
import { TeamUserDTO } from './team_user.dto';

@Injectable()
export class TeamUserService {
  constructor(
    @InjectRepository(TeamUser)
    private readonly repo: Repository<TeamUser>,
  ) {}

  public async getAll(): Promise<TeamUserDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => TeamUserDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<TeamUserDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => TeamUserDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<TeamUserDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => TeamUserDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<TeamUserDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => TeamUserDTO.fromEntity(datas));
  }

  public async create(dto: TeamUserDTO): Promise<TeamUserDTO> {
    return await this.repo
      .save(TeamUserDTO.toEntity(dto))
      .then((e) => TeamUserDTO.fromEntity(e));
  }

  public async update(id: string, dto: TeamUserDTO): Promise<TeamUserDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = TeamUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<TeamUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = TeamUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<TeamUserDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = TeamUserDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

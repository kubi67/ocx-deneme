import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersLogin } from 'src/models/users/user_login.entity';
import { Repository } from 'typeorm';
import { UserLoginDTO } from './user_login.dto';

@Injectable()
export class UserLoginService {
  constructor(
    @InjectRepository(UsersLogin)
    private readonly repo: Repository<UsersLogin>,
  ) {}

  public async getAll(): Promise<UserLoginDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => UserLoginDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<UserLoginDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => UserLoginDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<UserLoginDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => UserLoginDTO.fromEntity(e)));
  }

  public async getByUserId(id: string): Promise<UserLoginDTO[]> {
    return await this.repo
      .find({ where: { user_id: id } })
      .then((datas) => datas.map((e) => UserLoginDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<UserLoginDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => UserLoginDTO.fromEntity(datas));
  }

  public async create(dto: UserLoginDTO): Promise<UserLoginDTO> {
    return await this.repo
      .save(UserLoginDTO.toEntity(dto))
      .then((e) => UserLoginDTO.fromEntity(e));
  }

  public async update(id: string, dto: UserLoginDTO): Promise<UserLoginDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = UserLoginDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<UserLoginDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserLoginDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<UserLoginDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserLoginDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

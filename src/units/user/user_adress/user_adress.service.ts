import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddress } from 'src/models/users/user_adress.entity';
import { Repository } from 'typeorm';
import { UserAdressDTO } from './user_adress.dto';

@Injectable()
export class UserAdressService {
  constructor(
    @InjectRepository(UserAddress)
    private readonly repo: Repository<UserAddress>,
  ) {}

  public async getAll(): Promise<UserAdressDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => UserAdressDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<UserAdressDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => UserAdressDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<UserAdressDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => UserAdressDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<UserAdressDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => UserAdressDTO.fromEntity(datas));
  }

  public async create(dto: UserAdressDTO): Promise<UserAdressDTO> {
    return await this.repo
      .save(UserAdressDTO.toEntity(dto))
      .then((e) => UserAdressDTO.fromEntity(e));
  }

  public async update(id: string, dto: UserAdressDTO): Promise<UserAdressDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = UserAdressDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<UserAdressDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserAdressDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<UserAdressDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = UserAdressDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

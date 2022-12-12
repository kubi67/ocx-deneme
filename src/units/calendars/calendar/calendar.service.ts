import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calendar } from 'src/models/calendars/calendar.entity';
import { Repository } from 'typeorm';
import { CalendarDTO } from './calendar.dto';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Calendar)
    private readonly repo: Repository<Calendar>,
  ) {}

  public async getAll(): Promise<CalendarDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => CalendarDTO.fromEntity(e)));
  }

  public async getByName(name: string): Promise<CalendarDTO[]> {
    return await this.repo
      .find({ where: { name } })
      .then((datas) => datas.map((e) => CalendarDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<CalendarDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => CalendarDTO.fromEntity(e)));
  }

  public async getByUser(id: string): Promise<CalendarDTO[]> {
    return await this.repo
      .find({ where: { user_id: id } })
      .then((datas) => datas.map((e) => CalendarDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<CalendarDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => CalendarDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<CalendarDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => CalendarDTO.fromEntity(datas));
  }

  public async create(dto: CalendarDTO): Promise<CalendarDTO> {
    return await this.repo
      .save(CalendarDTO.toEntity(dto))
      .then((e) => CalendarDTO.fromEntity(e));
  }

  public async update(id: string, dto: CalendarDTO): Promise<CalendarDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = CalendarDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<CalendarDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = CalendarDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<CalendarDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = CalendarDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

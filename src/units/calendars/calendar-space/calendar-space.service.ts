import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalendarSpace } from 'src/models/calendars/calendar-space.entity';
import { Repository } from 'typeorm';
import { CalendarSpaceDTO } from './calendar-space.dto';

@Injectable()
export class CalendarSpaceService {
  constructor(
    @InjectRepository(CalendarSpace)
    private readonly repo: Repository<CalendarSpace>,
  ) {}

  public async getAll(): Promise<CalendarSpaceDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => CalendarSpaceDTO.fromEntity(e)));
  }

  public async getByCalendar(id: string): Promise<CalendarSpaceDTO[]> {
    return await this.repo
      .find({ where: { calendar_id: id } })
      .then((datas) => datas.map((e) => CalendarSpaceDTO.fromEntity(e)));
  }

  public async getByOwner(id: string): Promise<CalendarSpaceDTO[]> {
    return await this.repo
      .find({ where: { owner_id: id } })
      .then((datas) => datas.map((e) => CalendarSpaceDTO.fromEntity(e)));
  }

  public async getByIdentity(
    ownerId: string,
    calendarId: string,
  ): Promise<CalendarSpaceDTO[]> {
    const calendars = await this.repo
      .find({ where: { calendar_id: calendarId } })
      .then((datas) => datas.map((e) => CalendarSpaceDTO.fromEntity(e)));
    let calendarArr = Array<CalendarSpaceDTO>();
    calendars.map((val, index) => {
      if (val.identity_id.includes(ownerId)) {
        calendarArr.push(val);
      }
    });
    return calendarArr;
  }

  public async getByIdMany(id: string): Promise<CalendarSpaceDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => CalendarSpaceDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<CalendarSpaceDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => CalendarSpaceDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<CalendarSpaceDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => CalendarSpaceDTO.fromEntity(datas));
  }

  public async create(dto: CalendarSpaceDTO): Promise<CalendarSpaceDTO> {
    return await this.repo
      .save(CalendarSpaceDTO.toEntity(dto))
      .then((e) => CalendarSpaceDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: CalendarSpaceDTO,
  ): Promise<CalendarSpaceDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = CalendarSpaceDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<CalendarSpaceDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = CalendarSpaceDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<CalendarSpaceDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = CalendarSpaceDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalendarDetail } from 'src/models/calendars/calendar-detail.entity';
import { Repository } from 'typeorm';
import { CalendarDetailDTO } from './calendar-detail.dto';

@Injectable()
export class CalendarDetailService {
  constructor(
    @InjectRepository(CalendarDetail)
    private readonly repo: Repository<CalendarDetail>,
  ) {}

  public async getAll(): Promise<CalendarDetailDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => CalendarDetailDTO.fromEntity(e)));
  }

  public async getByCalendar(id: string): Promise<CalendarDetailDTO[]> {
    return await this.repo
      .find({ where: { calendar_id: id } })
      .then((datas) => datas.map((e) => CalendarDetailDTO.fromEntity(e)));
  }

  public async getByCalendarSpace(id: string): Promise<CalendarDetailDTO[]> {
    return await this.repo
      .find({ where: { calendar_space_id: id } })
      .then((datas) => datas.map((e) => CalendarDetailDTO.fromEntity(e)));
  }

  public async getByIdMany(id: string): Promise<CalendarDetailDTO[]> {
    return await this.repo
      .find({ where: { id: id } })
      .then((datas) => datas.map((e) => CalendarDetailDTO.fromEntity(e)));
  }

  public async getAllByStatus(status: boolean): Promise<CalendarDetailDTO[]> {
    return await this.repo
      .find({ where: { isDeleted: status } })
      .then((datas) => datas.map((e) => CalendarDetailDTO.fromEntity(e)));
  }

  public async getById(id: string): Promise<CalendarDetailDTO> {
    return await this.repo
      .findOne({ where: { id: id } })
      .then((datas) => CalendarDetailDTO.fromEntity(datas));
  }

  public async create(dto: CalendarDetailDTO): Promise<CalendarDetailDTO> {
    return await this.repo
      .save(CalendarDetailDTO.toEntity(dto))
      .then((e) => CalendarDetailDTO.fromEntity(e));
  }

  public async update(
    id: string,
    dto: CalendarDetailDTO,
  ): Promise<CalendarDetailDTO> {
    const tryUpdate = await this.repo.update(id, dto);
    if (tryUpdate.affected > 0) {
      const updatedData = CalendarDetailDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async changeStatus(id: string): Promise<CalendarDetailDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = !findData.isDeleted;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = CalendarDetailDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async softDelete(id: string): Promise<CalendarDetailDTO> {
    const findData = await this.repo.findOne({ where: { id: id } });
    findData.isDeleted = true;
    const tryUpdate = await this.repo.update(id, findData);
    if (tryUpdate.affected > 0) {
      const updatedData = CalendarDetailDTO.fromEntity(
        await this.repo.findOne({ where: { id: id } }),
      );
      return updatedData;
    }
  }

  public async hardDelete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
}

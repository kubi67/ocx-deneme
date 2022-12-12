import { CalendarDetail } from 'src/models/calendars/calendar-detail.entity';
import { Repository } from 'typeorm';
import { CalendarDetailDTO } from './calendar-detail.dto';
export declare class CalendarDetailService {
    private readonly repo;
    constructor(repo: Repository<CalendarDetail>);
    getAll(): Promise<CalendarDetailDTO[]>;
    getByCalendar(id: string): Promise<CalendarDetailDTO[]>;
    getByCalendarSpace(id: string): Promise<CalendarDetailDTO[]>;
    getByIdMany(id: string): Promise<CalendarDetailDTO[]>;
    getAllByStatus(status: boolean): Promise<CalendarDetailDTO[]>;
    getById(id: string): Promise<CalendarDetailDTO>;
    create(dto: CalendarDetailDTO): Promise<CalendarDetailDTO>;
    update(id: string, dto: CalendarDetailDTO): Promise<CalendarDetailDTO>;
    changeStatus(id: string): Promise<CalendarDetailDTO>;
    softDelete(id: string): Promise<CalendarDetailDTO>;
    hardDelete(id: string): Promise<any>;
}

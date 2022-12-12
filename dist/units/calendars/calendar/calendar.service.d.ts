import { Calendar } from 'src/models/calendars/calendar.entity';
import { Repository } from 'typeorm';
import { CalendarDTO } from './calendar.dto';
export declare class CalendarService {
    private readonly repo;
    constructor(repo: Repository<Calendar>);
    getAll(): Promise<CalendarDTO[]>;
    getByName(name: string): Promise<CalendarDTO[]>;
    getByIdMany(id: string): Promise<CalendarDTO[]>;
    getByUser(id: string): Promise<CalendarDTO[]>;
    getAllByStatus(status: boolean): Promise<CalendarDTO[]>;
    getById(id: string): Promise<CalendarDTO>;
    create(dto: CalendarDTO): Promise<CalendarDTO>;
    update(id: string, dto: CalendarDTO): Promise<CalendarDTO>;
    changeStatus(id: string): Promise<CalendarDTO>;
    softDelete(id: string): Promise<CalendarDTO>;
    hardDelete(id: string): Promise<any>;
}

import { CalendarSpace } from 'src/models/calendars/calendar-space.entity';
import { Repository } from 'typeorm';
import { CalendarSpaceDTO } from './calendar-space.dto';
export declare class CalendarSpaceService {
    private readonly repo;
    constructor(repo: Repository<CalendarSpace>);
    getAll(): Promise<CalendarSpaceDTO[]>;
    getByCalendar(id: string): Promise<CalendarSpaceDTO[]>;
    getByOwner(id: string): Promise<CalendarSpaceDTO[]>;
    getByIdentity(ownerId: string, calendarId: string): Promise<CalendarSpaceDTO[]>;
    getByIdMany(id: string): Promise<CalendarSpaceDTO[]>;
    getAllByStatus(status: boolean): Promise<CalendarSpaceDTO[]>;
    getById(id: string): Promise<CalendarSpaceDTO>;
    create(dto: CalendarSpaceDTO): Promise<CalendarSpaceDTO>;
    update(id: string, dto: CalendarSpaceDTO): Promise<CalendarSpaceDTO>;
    changeStatus(id: string): Promise<CalendarSpaceDTO>;
    softDelete(id: string): Promise<CalendarSpaceDTO>;
    hardDelete(id: string): Promise<any>;
}

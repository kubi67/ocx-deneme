import { CalendarSpaceDTO } from './calendar-space.dto';
import { CalendarSpaceService } from './calendar-space.service';
export declare class CalendarSpaceController {
    private readonly calendarSpaceService;
    constructor(calendarSpaceService: CalendarSpaceService);
    getAll(): Promise<CalendarSpaceDTO[]>;
    getAllByStatus(status: boolean): Promise<CalendarSpaceDTO[]>;
    getByCalendar(id: string): Promise<CalendarSpaceDTO[]>;
    getByOwner(id: string): Promise<CalendarSpaceDTO[]>;
    getByIdentity(owner: string, calendar: string): Promise<CalendarSpaceDTO[]>;
    get(id: string): Promise<CalendarSpaceDTO>;
    create(dto: CalendarSpaceDTO): Promise<CalendarSpaceDTO>;
    update(id: string, dto: CalendarSpaceDTO): Promise<CalendarSpaceDTO>;
    softDelete(id: string): Promise<CalendarSpaceDTO>;
    hardDelete(id: string): Promise<any>;
}

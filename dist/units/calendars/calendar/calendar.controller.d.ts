import { CalendarDTO } from './calendar.dto';
import { CalendarService } from './calendar.service';
export declare class CalendarController {
    private readonly calendarService;
    constructor(calendarService: CalendarService);
    getAll(): Promise<CalendarDTO[]>;
    getAllByStatus(status: boolean): Promise<CalendarDTO[]>;
    getByModelID(name: string): Promise<CalendarDTO[]>;
    get(id: string): Promise<CalendarDTO>;
    create(dto: CalendarDTO): Promise<CalendarDTO>;
    update(id: string, dto: CalendarDTO): Promise<CalendarDTO>;
    softDelete(id: string): Promise<CalendarDTO>;
    hardDelete(id: string): Promise<any>;
}

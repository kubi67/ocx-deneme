import { CalendarDetailDTO } from './calendar-detail.dto';
import { CalendarDetailService } from './calendar-detail.service';
export declare class CalendarDetailController {
    private readonly calendarDetailService;
    constructor(calendarDetailService: CalendarDetailService);
    getAll(): Promise<CalendarDetailDTO[]>;
    getAllByStatus(status: boolean): Promise<CalendarDetailDTO[]>;
    getByCalendar(id: string): Promise<CalendarDetailDTO[]>;
    getByCalendarSpace(id: string): Promise<CalendarDetailDTO[]>;
    get(id: string): Promise<CalendarDetailDTO>;
    create(dto: CalendarDetailDTO): Promise<CalendarDetailDTO>;
    update(id: string, dto: CalendarDetailDTO): Promise<CalendarDetailDTO>;
    softDelete(id: string): Promise<CalendarDetailDTO>;
    hardDelete(id: string): Promise<any>;
}

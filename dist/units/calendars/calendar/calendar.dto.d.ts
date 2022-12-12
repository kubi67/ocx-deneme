import { Calendar } from 'src/models/calendars/calendar.entity';
export declare class CalendarDTO implements Readonly<CalendarDTO> {
    id: string;
    user_id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<CalendarDTO>): CalendarDTO;
    static fromEntity(entity: Calendar): CalendarDTO;
    static toEntity(dto: Partial<CalendarDTO>): Calendar;
}

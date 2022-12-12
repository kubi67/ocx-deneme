import { CalendarDetail } from 'src/models/calendars/calendar-detail.entity';
export declare class CalendarDetailDTO implements Readonly<CalendarDetailDTO> {
    id: string;
    calendar_id: string;
    calendar_space_id: string;
    calendar_days: string[];
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<CalendarDetailDTO>): CalendarDetailDTO;
    static fromEntity(entity: CalendarDetail): CalendarDetailDTO;
    static toEntity(dto: Partial<CalendarDetailDTO>): CalendarDetail;
}

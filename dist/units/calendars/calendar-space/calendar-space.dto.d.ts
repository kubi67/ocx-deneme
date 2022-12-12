import { CalendarSpace } from 'src/models/calendars/calendar-space.entity';
export declare class CalendarSpaceDTO implements Readonly<CalendarSpaceDTO> {
    id: string;
    owner_id: string;
    identity_id: string[];
    calendar_id: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<CalendarSpaceDTO>): CalendarSpaceDTO;
    static fromEntity(entity: CalendarSpace): CalendarSpaceDTO;
    static toEntity(dto: Partial<CalendarSpaceDTO>): CalendarSpace;
}

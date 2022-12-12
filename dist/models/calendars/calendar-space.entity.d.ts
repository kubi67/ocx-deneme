import { BaseEntity } from '../base.entity';
export declare class CalendarSpace extends BaseEntity {
    owner_id: string;
    identity_id: string[];
    calendar_id: string;
    description: string;
}

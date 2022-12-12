import { BaseEntity } from '../base.entity';
export declare class Notification extends BaseEntity {
    title: string;
    message: string;
    notification_type: number;
    status: number;
}

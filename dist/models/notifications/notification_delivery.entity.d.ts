import { BaseEntity } from '../base.entity';
export declare class NotificationDelivery extends BaseEntity {
    notification_id: string;
    user_id: string;
    read_at: Date;
}

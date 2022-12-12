import { NotificationDelivery } from 'src/models/notifications/notification_delivery.entity';
export declare class NotificationDeliveryDTO implements Readonly<NotificationDeliveryDTO> {
    id: string;
    notification_id: string;
    user_id: string;
    read_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<NotificationDeliveryDTO>): NotificationDeliveryDTO;
    static fromEntity(entity: NotificationDelivery): NotificationDeliveryDTO;
    static toEntity(dto: Partial<NotificationDeliveryDTO>): NotificationDelivery;
}

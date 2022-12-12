import { Notification } from 'src/models/notifications/notifications.entity';
export declare class NotificationDTO implements Readonly<NotificationDTO> {
    id: string;
    title: string;
    message: string;
    notification_type: number;
    status: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<NotificationDTO>): NotificationDTO;
    static fromEntity(entity: Notification): NotificationDTO;
    static toEntity(dto: Partial<NotificationDTO>): Notification;
}

import { NotificationDeliveryDTO } from './notification-delivery.dto';
import { NotificationDeliveryService } from './notification-delivery.service';
export declare class NotificationDeliveryController {
    private readonly notificationDeliveryService;
    constructor(notificationDeliveryService: NotificationDeliveryService);
    getAll(): Promise<NotificationDeliveryDTO[]>;
    getAllByStatus(status: boolean): Promise<NotificationDeliveryDTO[]>;
    get(id: string): Promise<NotificationDeliveryDTO>;
    getLeadsFull(): Promise<any>;
    getByUser(id: string): Promise<NotificationDeliveryDTO[]>;
    getByNotification(id: string): Promise<NotificationDeliveryDTO[]>;
    create(dto: NotificationDeliveryDTO): Promise<NotificationDeliveryDTO>;
    update(id: string, dto: NotificationDeliveryDTO): Promise<NotificationDeliveryDTO>;
    softDelete(id: string): Promise<NotificationDeliveryDTO>;
    hardDelete(id: string): Promise<any>;
}

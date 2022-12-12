import { NotificationDelivery } from 'src/models/notifications/notification_delivery.entity';
import { Repository } from 'typeorm';
import { NotificationDeliveryDTO } from './notification-delivery.dto';
export declare class NotificationDeliveryService {
    private readonly repo;
    constructor(repo: Repository<NotificationDelivery>);
    getAll(): Promise<NotificationDeliveryDTO[]>;
    getAllByStatus(status: boolean): Promise<NotificationDeliveryDTO[]>;
    getByIdMany(id: string): Promise<NotificationDeliveryDTO[]>;
    getByUser(id: string): Promise<NotificationDeliveryDTO[]>;
    getByNotification(id: string): Promise<NotificationDeliveryDTO[]>;
    getById(id: string): Promise<NotificationDeliveryDTO>;
    create(dto: NotificationDeliveryDTO): Promise<NotificationDeliveryDTO>;
    update(id: string, dto: NotificationDeliveryDTO): Promise<NotificationDeliveryDTO>;
    getAllWithAll(): Promise<any>;
    changeStatus(id: string): Promise<NotificationDeliveryDTO>;
    softDelete(id: string): Promise<NotificationDeliveryDTO>;
    hardDelete(id: string): Promise<any>;
}

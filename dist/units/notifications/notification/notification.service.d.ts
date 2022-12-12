import { Notification } from 'src/models/notifications/notifications.entity';
import { Repository } from 'typeorm';
import { NotificationDTO } from './notification.dto';
export declare class NotificationService {
    private readonly repo;
    constructor(repo: Repository<Notification>);
    getAll(): Promise<NotificationDTO[]>;
    getAllByStatus(status: boolean): Promise<NotificationDTO[]>;
    getByIdMany(id: string): Promise<NotificationDTO[]>;
    getByNotificationType(type: number): Promise<NotificationDTO[]>;
    getByStatus(status: number): Promise<NotificationDTO[]>;
    getById(id: string): Promise<NotificationDTO>;
    create(dto: NotificationDTO): Promise<NotificationDTO>;
    update(id: string, dto: NotificationDTO): Promise<NotificationDTO>;
    getAllWithAll(): Promise<any>;
    changeStatus(id: string): Promise<NotificationDTO>;
    softDelete(id: string): Promise<NotificationDTO>;
    hardDelete(id: string): Promise<any>;
}

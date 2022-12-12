import { NotificationDTO } from './notification.dto';
import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    getAll(): Promise<NotificationDTO[]>;
    getAllByStatus(status: boolean): Promise<NotificationDTO[]>;
    get(id: string): Promise<NotificationDTO>;
    getLeadsFull(): Promise<any>;
    getByTyper(type: number): Promise<NotificationDTO[]>;
    create(dto: NotificationDTO): Promise<NotificationDTO>;
    update(id: string, dto: NotificationDTO): Promise<NotificationDTO>;
    softDelete(id: string): Promise<NotificationDTO>;
    hardDelete(id: string): Promise<any>;
}

import { MessageDeliveryDTO } from './message_delivery.dto';
import { MessageDeliveryService } from './message_delivery.service';
export declare class MessageDeliveryController {
    private readonly messageDeliveryService;
    constructor(messageDeliveryService: MessageDeliveryService);
    getAll(): Promise<MessageDeliveryDTO[]>;
    getAllByStatus(status: boolean): Promise<MessageDeliveryDTO[]>;
    get(id: string): Promise<MessageDeliveryDTO>;
    getLeadsFull(): Promise<any>;
    getByMessage(message: string): Promise<MessageDeliveryDTO[]>;
    getByUser(user: string): Promise<MessageDeliveryDTO[]>;
    create(dto: MessageDeliveryDTO): Promise<MessageDeliveryDTO>;
    update(id: string, dto: MessageDeliveryDTO): Promise<MessageDeliveryDTO>;
    softDelete(id: string): Promise<MessageDeliveryDTO>;
    hardDelete(id: string): Promise<any>;
}

import { MessageDelivery } from 'src/models/messages/message_delivery.entity';
import { Repository } from 'typeorm';
import { MessageDeliveryDTO } from './message_delivery.dto';
export declare class MessageDeliveryService {
    private readonly repo;
    constructor(repo: Repository<MessageDelivery>);
    getAll(): Promise<MessageDeliveryDTO[]>;
    getAllByStatus(status: boolean): Promise<MessageDeliveryDTO[]>;
    getByIdMany(id: string): Promise<MessageDeliveryDTO[]>;
    getByMessage(id: string): Promise<MessageDeliveryDTO[]>;
    getByUser(id: string): Promise<MessageDeliveryDTO[]>;
    getById(id: string): Promise<MessageDeliveryDTO>;
    create(dto: MessageDeliveryDTO): Promise<MessageDeliveryDTO>;
    update(id: string, dto: MessageDeliveryDTO): Promise<MessageDeliveryDTO>;
    getAllWithAll(): Promise<any>;
    changeStatus(id: string): Promise<MessageDeliveryDTO>;
    softDelete(id: string): Promise<MessageDeliveryDTO>;
    hardDelete(id: string): Promise<any>;
}

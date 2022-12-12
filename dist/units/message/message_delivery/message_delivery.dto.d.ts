import { MessageDelivery } from 'src/models/messages/message_delivery.entity';
export declare class MessageDeliveryDTO implements Readonly<MessageDeliveryDTO> {
    id: string;
    message_id: string;
    user_id: string;
    content: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<MessageDeliveryDTO>): MessageDeliveryDTO;
    static fromEntity(entity: MessageDelivery): MessageDeliveryDTO;
    static toEntity(dto: Partial<MessageDeliveryDTO>): MessageDelivery;
}

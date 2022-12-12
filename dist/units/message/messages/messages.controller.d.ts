import { MessageBoardDTO } from './messages.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    getAll(): Promise<MessageBoardDTO[]>;
    getAllByStatus(status: boolean): Promise<MessageBoardDTO[]>;
    get(id: string): Promise<MessageBoardDTO>;
    getLeadsFull(): Promise<any>;
    getByAuthor(author: string): Promise<MessageBoardDTO[]>;
    create(dto: MessageBoardDTO): Promise<MessageBoardDTO>;
    update(id: string, dto: MessageBoardDTO): Promise<MessageBoardDTO>;
    softDelete(id: string): Promise<MessageBoardDTO>;
    hardDelete(id: string): Promise<any>;
}

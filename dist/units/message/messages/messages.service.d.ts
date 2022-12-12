import { MessageBoard } from 'src/models/messages/message_board.entity';
import { Repository } from 'typeorm';
import { MessageBoardDTO } from './messages.dto';
export declare class MessagesService {
    private readonly repo;
    constructor(repo: Repository<MessageBoard>);
    getAll(): Promise<MessageBoardDTO[]>;
    getAllByStatus(status: boolean): Promise<MessageBoardDTO[]>;
    getByIdMany(id: string): Promise<MessageBoardDTO[]>;
    getByAuthor(id: string): Promise<MessageBoardDTO[]>;
    getById(id: string): Promise<MessageBoardDTO>;
    create(dto: MessageBoardDTO): Promise<MessageBoardDTO>;
    update(id: string, dto: MessageBoardDTO): Promise<MessageBoardDTO>;
    getAllWithAll(): Promise<any>;
    changeStatus(id: string): Promise<MessageBoardDTO>;
    softDelete(id: string): Promise<MessageBoardDTO>;
    hardDelete(id: string): Promise<any>;
}

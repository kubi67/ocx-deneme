import { MessageBoard } from 'src/models/messages/message_board.entity';
export declare class MessageBoardDTO implements Readonly<MessageBoardDTO> {
    id: string;
    author_id: string;
    message: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    lastChangedDateTime: Date;
    isDeleted: boolean;
    static from(dto: Partial<MessageBoardDTO>): MessageBoardDTO;
    static fromEntity(entity: MessageBoard): MessageBoardDTO;
    static toEntity(dto: Partial<MessageBoardDTO>): MessageBoard;
}

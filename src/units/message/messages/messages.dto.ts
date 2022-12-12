import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { MessageBoard } from 'src/models/messages/message_board.entity';

export class MessageBoardDTO implements Readonly<MessageBoardDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  author_id: string;

  @ApiProperty({ required: true })
  message: string;

  @ApiProperty({ required: false })
  created_at: Date;

  @ApiProperty({ required: false })
  updated_at: Date;

  @ApiProperty({ required: false })
  deleted_at: Date;

  @ApiProperty({ required: false })
  lastChangedDateTime: Date;

  @ApiProperty({ required: false })
  isDeleted: boolean;

  public static from(dto: Partial<MessageBoardDTO>) {
    const it = new MessageBoardDTO();
    it.id = dto.id;
    it.author_id = dto.author_id;
    it.message = dto.message;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: MessageBoard) {
    return this.from({
      id: entity.id,
      author_id: entity.author_id,
      message: entity.message,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<MessageBoardDTO>) {
    const givenData = new MessageBoard();
    givenData.id = dto.id;
    givenData.author_id = dto.author_id;
    givenData.message = dto.message;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

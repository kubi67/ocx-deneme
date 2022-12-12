import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { MessageBoard } from 'src/models/messages/message_board.entity';
import { MessageDelivery } from 'src/models/messages/message_delivery.entity';

export class MessageDeliveryDTO implements Readonly<MessageDeliveryDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  message_id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  content: number;

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

  public static from(dto: Partial<MessageDeliveryDTO>) {
    const it = new MessageDeliveryDTO();
    it.id = dto.id;
    it.message_id = dto.message_id;
    it.user_id = dto.user_id;
    it.content = dto.content;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: MessageDelivery) {
    return this.from({
      id: entity.id,
      message_id: entity.message_id,
      user_id: entity.user_id,
      content: entity.content,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<MessageDeliveryDTO>) {
    const givenData = new MessageDelivery();
    givenData.id = dto.id;
    givenData.message_id = dto.message_id;
    givenData.user_id = dto.user_id;
    givenData.content = dto.content;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

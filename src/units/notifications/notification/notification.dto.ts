import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { MessageBoard } from 'src/models/messages/message_board.entity';
import { Notification } from 'src/models/notifications/notifications.entity';

export class NotificationDTO implements Readonly<NotificationDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  message: string;

  @ApiProperty({ required: true })
  notification_type: number;

  @ApiProperty({ required: true })
  status: number;

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

  public static from(dto: Partial<NotificationDTO>) {
    const it = new NotificationDTO();
    it.id = dto.id;
    it.title = dto.title;
    it.message = dto.message;
    it.notification_type = dto.notification_type;
    it.status = dto.status;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Notification) {
    return this.from({
      id: entity.id,
      title: entity.title,
      message: entity.message,
      notification_type: entity.notification_type,
      status: entity.status,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<NotificationDTO>) {
    const givenData = new Notification();
    givenData.id = dto.id;
    givenData.title = dto.title;
    givenData.notification_type = dto.notification_type;
    givenData.message = dto.message;
    givenData.status = dto.status;

    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

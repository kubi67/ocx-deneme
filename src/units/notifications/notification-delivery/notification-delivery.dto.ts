import { ApiProperty } from '@nestjs/swagger';
import { NotificationDelivery } from 'src/models/notifications/notification_delivery.entity';

export class NotificationDeliveryDTO
  implements Readonly<NotificationDeliveryDTO>
{
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  notification_id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  read_at: Date;

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

  public static from(dto: Partial<NotificationDeliveryDTO>) {
    const it = new NotificationDeliveryDTO();
    it.id = dto.id;
    it.notification_id = dto.notification_id;
    it.user_id = dto.user_id;
    it.read_at = dto.read_at;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: NotificationDelivery) {
    return this.from({
      id: entity.id,
      notification_id: entity.notification_id,
      user_id: entity.user_id,
      read_at: entity.read_at,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<NotificationDeliveryDTO>) {
    const givenData = new NotificationDelivery();
    givenData.id = dto.id;
    givenData.notification_id = dto.notification_id;
    givenData.user_id = dto.user_id;
    givenData.read_at = dto.read_at;

    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

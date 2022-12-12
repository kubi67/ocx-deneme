import { ApiProperty } from '@nestjs/swagger';
import { NotificationDelivery } from 'src/models/notifications/notification_delivery.entity';
import { Reports } from 'src/models/reports/reports.entity';

export class ReportsDTO implements Readonly<ReportsDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  owner_id: string;

  @ApiProperty({ required: true })
  data: string;

  @ApiProperty({ required: true })
  state: number;

  @ApiProperty({ required: true })
  type: number;

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

  public static from(dto: Partial<ReportsDTO>) {
    const it = new ReportsDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.owner_id = dto.owner_id;
    it.data = dto.data;
    it.state = dto.state;
    it.type = dto.type;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Reports) {
    return this.from({
      id: entity.id,
      name: entity.name,
      owner_id: entity.owner_id,
      data: entity.data,
      state: entity.state,
      type: entity.type,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<ReportsDTO>) {
    const givenData = new Reports();
    givenData.id = dto.id;
    givenData.name = dto.name;
    givenData.owner_id = dto.owner_id;
    givenData.data = dto.data;
    givenData.state = dto.state;
    givenData.type = dto.type;

    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

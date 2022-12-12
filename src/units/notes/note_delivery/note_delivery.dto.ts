import { ApiProperty } from '@nestjs/swagger';
import { NoteDelivery } from 'src/models/notes/note_delivery.entity';

export class NoteDeliveryDTO implements Readonly<NoteDeliveryDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  note_id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  delivered: boolean;

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

  public static from(dto: Partial<NoteDeliveryDTO>) {
    const it = new NoteDeliveryDTO();
    it.id = dto.id;
    it.note_id = dto.note_id;
    it.user_id = dto.user_id;
    it.delivered = dto.delivered;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: NoteDelivery) {
    return this.from({
      id: entity.id,
      note_id : entity.note_id,
      user_id: entity.user_id,
      delivered: entity.delivered,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<NoteDeliveryDTO>) {
    const givenData = new NoteDelivery();
    givenData.id = dto.id;
    givenData.note_id = dto.note_id;
    givenData.user_id = dto.user_id;
    givenData.delivered = dto.delivered;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

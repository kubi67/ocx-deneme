import { ApiProperty } from '@nestjs/swagger';
import { Notes } from 'src/models/notes/notes.entity';
import { NoteDelivery } from 'src/models/notes/note_delivery.entity';

export class NotesDTO implements Readonly<NotesDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  author_id: string;

  @ApiProperty({ required: true })
  model_type: string;

  @ApiProperty({ required: true })
  model_id: string;

  @ApiProperty({ required: true })
  note: string;

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

  public static from(dto: Partial<NotesDTO>) {
    const it = new NotesDTO();
    it.id = dto.id;
    it.author_id = dto.author_id;
    it.model_type = dto.model_type;
    it.model_id = dto.model_id;
    it.note = dto.note;
    it.status = dto.status;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Notes) {
    return this.from({
      id: entity.id,
      author_id: entity.author_id,
      model_type: entity.model_type,
      model_id: entity.model_id,
      note: entity.note,
      status: entity.status,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<NotesDTO>) {
    const givenData = new Notes();
    givenData.id = dto.id;
    givenData.author_id = dto.author_id;
    givenData.model_id = dto.model_id;
    givenData.model_type = dto.model_type;
    givenData.note = dto.note;
    givenData.status = dto.status;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

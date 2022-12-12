import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Calendar } from 'src/models/calendars/calendar.entity';
import { MessageBoard } from 'src/models/messages/message_board.entity';

export class CalendarDTO implements Readonly<CalendarDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  description: string;

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

  public static from(dto: Partial<CalendarDTO>) {
    const it = new CalendarDTO();
    it.id = dto.id;
    it.user_id = dto.user_id;
    it.name = dto.name;
    it.description = dto.description;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Calendar) {
    return this.from({
      id: entity.id,
      user_id : entity.user_id,
      name: entity.name,
      description: entity.description,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<CalendarDTO>) {
    const givenData = new Calendar();
    givenData.id = dto.id;
    givenData.name = dto.name;
    givenData.user_id = dto.user_id;
    givenData.description = dto.description;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

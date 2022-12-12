import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { CalendarDetail } from 'src/models/calendars/calendar-detail.entity';
import { Calendar } from 'src/models/calendars/calendar.entity';
import { MessageBoard } from 'src/models/messages/message_board.entity';

export class CalendarDetailDTO implements Readonly<CalendarDetailDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  calendar_id: string;

  @ApiProperty({ required: true })
  calendar_space_id: string;

  @ApiProperty({ required: true })
  calendar_days: string[];

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

  public static from(dto: Partial<CalendarDetailDTO>) {
    const it = new CalendarDetailDTO();
    it.id = dto.id;
    it.calendar_id = dto.calendar_id;
    it.calendar_space_id = dto.calendar_space_id;
    it.calendar_days = dto.calendar_days;
    it.description = dto.description;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: CalendarDetail) {
    return this.from({
      id: entity.id,
      calendar_id: entity.calendar_id,
      calendar_days: entity.calendar_days,
      calendar_space_id: entity.calendar_space_id,
      description: entity.description,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<CalendarDetailDTO>) {
    const givenData = new CalendarDetail();
    givenData.id = dto.id;
    givenData.calendar_id = dto.calendar_id;
    givenData.calendar_space_id = dto.calendar_space_id;
    givenData.calendar_days = dto.calendar_days;
    givenData.description = dto.description;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { CalendarSpace } from 'src/models/calendars/calendar-space.entity';

export class CalendarSpaceDTO implements Readonly<CalendarSpaceDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  owner_id: string;

  @ApiProperty({ required: true })
  identity_id: string[];

  @ApiProperty({ required: true })
  calendar_id: string;

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

  public static from(dto: Partial<CalendarSpaceDTO>) {
    const it = new CalendarSpaceDTO();
    it.id = dto.id;
    it.calendar_id = dto.calendar_id;
    it.identity_id = dto.identity_id;
    it.calendar_id = dto.calendar_id;
    it.owner_id = dto.owner_id;
    it.description = dto.description;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: CalendarSpace) {
    return this.from({
      id: entity.id,
      owner_id: entity.owner_id,
      identity_id: entity.identity_id,
      calendar_id: entity.calendar_id,
      description: entity.description,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<CalendarSpaceDTO>) {
    const givenData = new CalendarSpace();
    givenData.id = dto.id;
    givenData.owner_id = dto.owner_id;
    givenData.identity_id = dto.identity_id;
    givenData.calendar_id = dto.calendar_id;
    givenData.description = dto.description;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

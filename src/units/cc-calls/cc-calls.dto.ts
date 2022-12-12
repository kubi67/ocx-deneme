import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { CcCalls } from 'src/models/ccs/cc_calls.entity';

export class CcCallsDTO implements Readonly<CcCallsDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  cid: string;

  @ApiProperty({ required: true })
  caller_number: string;

  @ApiProperty({ required: true })
  duid: string;

  @ApiProperty({ required: true })
  called_number: string;

  @ApiProperty({ required: true })
  duration: number;

  @ApiProperty({ required: true })
  call_start: Date;

  @ApiProperty({ required: true })
  call_end: Date;

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

  public static from(dto: Partial<CcCallsDTO>) {
    const it = new CcCallsDTO();
    it.id = it.id;
    it.cid = dto.cid;
    it.caller_number = dto.caller_number;
    it.duid = dto.duid;
    it.called_number = dto.called_number;
    it.duration = dto.duration;
    it.call_start = dto.call_start;
    it.call_end = dto.call_end;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: CcCalls) {
    return this.from({
      id: entity.id,
      cid : entity.cid,
      caller_number : entity.caller_number,
      duid : entity.duid,
      called_number : entity.called_number,
      duration : entity.duration,
      call_start : entity.call_start,
      call_end : entity.call_end,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<CcCallsDTO>) {
    const givenData = new CcCalls();
    givenData.id = dto.id;
    givenData.cid = dto.cid;
    givenData.caller_number = dto.caller_number;
    givenData.called_number = dto.called_number;
    givenData.duid = dto.duid;
    givenData.duration = dto.duration;
    givenData.call_start = dto.call_start;
    givenData.call_end = dto.call_end;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

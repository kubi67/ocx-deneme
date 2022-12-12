import { ApiProperty } from '@nestjs/swagger';
import { ReportUser } from 'src/models/reports/reports_user.entity';

export class ReportsUserDTO implements Readonly<ReportsUserDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  report_id: string;

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

  public static from(dto: Partial<ReportsUserDTO>) {
    const it = new ReportsUserDTO();
    it.id = dto.id;
    it.user_id = dto.user_id;
    it.report_id = dto.report_id;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: ReportUser) {
    return this.from({
      id: entity.id,
      user_id: entity.user_id,
      report_id: entity.report_id,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<ReportsUserDTO>) {
    const givenData = new ReportUser();
    givenData.id = dto.id;
    givenData.user_id = dto.user_id;
    givenData.report_id = dto.report_id;

    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

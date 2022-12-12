import { ApiProperty } from '@nestjs/swagger';
import { LeadSourceTypes } from 'src/models/leads/lead_source_types.entity';

export class LeadSourceTypesDTO implements Readonly<LeadSourceTypesDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false })
  language_id: string;

  @ApiProperty({ required: true })
  name: string;

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

  public static from(dto: Partial<LeadSourceTypesDTO>) {
    const it = new LeadSourceTypesDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.language_id = dto.language_id;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: LeadSourceTypes) {
    return this.from({
      id: entity.id,
      name: entity.name,
      language_id : entity.language_id,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<LeadSourceTypesDTO>) {
    const givenData = new LeadSourceTypes();
    givenData.id = dto.id;
    givenData.name = dto.name;
    givenData.language_id = dto.language_id;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

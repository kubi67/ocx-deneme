import { ApiProperty } from '@nestjs/swagger';
import { LeadSourceTypes } from 'src/models/leads/lead_source_types.entity';
import { LeadStatesDescriptions } from 'src/models/leads/lead_state_descriptions.entity';

export class LeadStateDescriptionDTO
  implements Readonly<LeadStateDescriptionDTO>
{
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false })
  lead_state_id: string;

  @ApiProperty({ required: true })
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

  public static from(dto: Partial<LeadStateDescriptionDTO>) {
    const it = new LeadStateDescriptionDTO();
    it.id = dto.id;
    it.lead_state_id = dto.lead_state_id;
    it.language_id = dto.language_id;
    it.name = dto.name;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: LeadStatesDescriptions) {
    return this.from({
      id: entity.id,
      name: entity.name,
      language_id: entity.language_id,
      lead_state_id: entity.lead_state_id,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<LeadStateDescriptionDTO>) {
    const givenData = new LeadStatesDescriptions();
    givenData.id = dto.id;
    givenData.name = dto.name;
    givenData.language_id = dto.language_id;
    givenData.lead_state_id = dto.lead_state_id;

    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

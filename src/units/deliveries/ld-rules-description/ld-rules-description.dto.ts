import { ApiProperty } from '@nestjs/swagger';
import { LdRules } from 'src/models/deliveries/ld_rules.entity';
import { LdRulesDescription } from 'src/models/deliveries/ld_rules_description.entity';

export class LdRulesDescriptionDTO implements Readonly<LdRulesDescriptionDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  ld_rules: string;

  @ApiProperty({ required: true })
  language_id: string;

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

  public static from(dto: Partial<LdRulesDescriptionDTO>) {
    const it = new LdRulesDescriptionDTO();
    it.id = it.id;
    it.ld_rules = dto.ld_rules;
    it.language_id = dto.language_id;
    it.description = dto.description;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: LdRulesDescription) {
    return this.from({
      id: entity.id,
      ld_rules : entity.ld_rules,
      language_id : entity.language_id,
      description : entity.description,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<LdRulesDescriptionDTO>) {
    const givenData = new LdRulesDescription();
    givenData.id = dto.id;
    givenData.ld_rules = dto.ld_rules;
    givenData.language_id = dto.language_id;
    givenData.description = dto.description;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

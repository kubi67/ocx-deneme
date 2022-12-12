import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Settings } from 'src/models/settings/settings.entity';

export class SettingsDTO implements Readonly<SettingsDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  model_id: string;

  @ApiProperty({ required: true })
  model: string;

  @ApiProperty({ required: true })
  code: string;

  @ApiProperty({ required: true })
  key: string;

  @ApiProperty({ required: false })
  value: string;

  @ApiProperty({ required: false })
  created_by: string;

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

  public static from(dto: Partial<SettingsDTO>) {
    const it = new SettingsDTO();
    it.id = it.id;
    it.model_id = it.model_id;
    it.model = dto.model;
    it.code = dto.code;
    it.key = dto.key;
    it.value = dto.value;
    it.created_by = dto.created_by;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = it.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Settings) {
    return this.from({
      id: entity.id,
      model_id: entity.model_id,
      model: entity.model,
      code: entity.code,
      key: entity.key,
      value: entity.value,
      created_by: entity.created_by,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<SettingsDTO>) {
    const givenData = new Settings();
    givenData.id = dto.id;
    givenData.model_id = dto.model_id;
    givenData.model = dto.model;
    givenData.code = dto.code;
    givenData.key = dto.key;
    givenData.value = dto.value;
    givenData.created_by = dto.created_by;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

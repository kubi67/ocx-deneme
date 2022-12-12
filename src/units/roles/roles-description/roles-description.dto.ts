import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { RolesDescription } from 'src/models/rolesNpermissions/roles_description.entity';

export class RolesDescriptionDTO implements Readonly<RolesDescriptionDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false })
  role_id: string;

  @ApiProperty({ required: false })
  language_id: string;

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false })
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

  public static from(dto: Partial<RolesDescriptionDTO>) {
    const it = new RolesDescriptionDTO();
    it.id = dto.id;
    it.role_id = dto.role_id;
    it.language_id = dto.language_id;
    it.name = dto.name;
    it.description = dto.description;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: RolesDescription) {
    return this.from({
      id: entity.id,
      role_id: entity.role_id,
      language_id: entity.language_id,
      description: entity.description,
      name: entity.name,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<RolesDescriptionDTO>) {
    const givenData = new RolesDescription();
    givenData.id = dto.id;
    givenData.role_id = dto.role_id;
    givenData.language_id = dto.language_id;
    givenData.name = dto.name;
    givenData.description = dto.description;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

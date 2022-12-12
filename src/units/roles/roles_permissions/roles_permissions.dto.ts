import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { RolePermissions } from 'src/models/rolesNpermissions/role_permissions.entity';

export class RolesPermissionsDTO implements Readonly<RolesPermissionsDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  role_id: string;

  @ApiProperty({ required: true })
  permission_id: string;

  @ApiProperty({ required: true })
  assigned_by: string;

  @ApiProperty({ required: true })
  assigned_at: Date;

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

  public static from(dto: Partial<RolesPermissionsDTO>) {
    const it = new RolesPermissionsDTO();
    it.id = it.id;
    it.assigned_at = dto.assigned_at;
    it.assigned_by = dto.assigned_by;
    it.role_id = dto.role_id;
    it.permission_id = dto.permission_id;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = it.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: RolePermissions) {
    return this.from({
      id: entity.id,
      role_id: entity.role_id,
      permission_id: entity.permission_id,
      assigned_at: entity.assigned_at,
      assigned_by: entity.assigned_by,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<RolesPermissionsDTO>) {
    const givenData = new RolePermissions();
    givenData.id = dto.id;
    givenData.assigned_at = dto.assigned_at;
    givenData.assigned_by = dto.assigned_by;
    givenData.role_id = dto.role_id;
    givenData.permission_id = givenData.permission_id;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

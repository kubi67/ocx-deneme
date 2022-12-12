import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Roles } from 'src/models/rolesNpermissions/roles.entity';
import { UserRoles } from 'src/models/users/user_roles.entity';

export class RoleUserDTO implements Readonly<RoleUserDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  role_id: string;

  @ApiProperty({ required: false })
  assigned_by: string;

  @ApiProperty({ required: false })
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

  public static from(dto: Partial<RoleUserDTO>) {
    const it = new RoleUserDTO();
    it.id = it.id;
    it.user_id = dto.user_id;
    it.role_id = dto.role_id;
    it.assigned_by = dto.assigned_by;
    it.assigned_at = dto.assigned_at;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: UserRoles) {
    return this.from({
      id: entity.id,
      user_id: entity.user_id,
      role_id: entity.role_id,
      assigned_at: entity.assigned_at,
      assigned_by: entity.assigned_by,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<RoleUserDTO>) {
    const givenData = new UserRoles();
    givenData.id = dto.id;
    givenData.user_id = dto.user_id;
    givenData.role_id = dto.role_id;
    givenData.assigned_at = dto.assigned_at;
    givenData.assigned_by = dto.assigned_by;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

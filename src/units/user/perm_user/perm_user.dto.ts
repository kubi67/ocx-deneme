import { ApiProperty } from '@nestjs/swagger';
import { UserPermissions } from 'src/models/users/user_permissions.entity';

export class PermUserDTO implements Readonly<PermUserDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  user_id: string;

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

  public static from(dto: Partial<PermUserDTO>) {
    const it = new PermUserDTO();
    it.id = it.id;
    it.user_id = dto.user_id;
    it.permission_id = dto.permission_id;
    it.assigned_by = dto.assigned_by;
    it.assigned_at = dto.assigned_at;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: UserPermissions) {
    return this.from({
      id: entity.id,
      user_id: entity.user_id,
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

  public static toEntity(dto: Partial<PermUserDTO>) {
    const givenData = new UserPermissions();
    givenData.id = dto.id;
    givenData.user_id = dto.user_id;
    givenData.permission_id = dto.permission_id;
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

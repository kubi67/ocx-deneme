import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { UsersLogin } from 'src/models/users/user_login.entity';

export class UserLoginDTO implements Readonly<UserLoginDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  ip_addr: string;

  @ApiProperty({ required: true })
  last_access_at: Date;

  @ApiProperty({ required: true })
  agent: string;

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

  public static from(dto: Partial<UserLoginDTO>) {
    const it = new UserLoginDTO();
    it.id = it.id;
    it.user_id = dto.user_id;
    it.ip_addr = dto.ip_addr;
    it.last_access_at = dto.last_access_at;
    it.agent = dto.agent;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: UsersLogin) {
    return this.from({
      id: entity.id,
      user_id: entity.user_id,
      ip_addr: entity.ip_addr,
      last_access_at: entity.last_access_at,
      agent: entity.agent,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<UserLoginDTO>) {
    const givenData = new UsersLogin();

    givenData.user_id = dto.user_id;
    givenData.ip_addr = dto.ip_addr;
    givenData.last_access_at = dto.last_access_at;
    givenData.agent = dto.agent;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

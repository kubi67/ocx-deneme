import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsNumber,
} from 'class-validator';
import { TeamUser } from 'src/models/users/team_user.entity';

export class TeamUserDTO implements Readonly<TeamUserDTO> {
  @ApiProperty({ required: false })
  id: string;
  @ApiProperty({ required: false })
  team_id: string;
  @ApiProperty({ required: false })
  @IsString()
  user_id: string;
  @ApiProperty()
  @IsNumber()
  role_id: string;

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

  public static from(dto: Partial<TeamUserDTO>) {
    const it = new TeamUserDTO();
    it.id = dto.id;
    it.team_id = dto.team_id;
    it.user_id = dto.user_id;
    it.role_id = dto.role_id;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: TeamUser) {
    return this.from({
      id: entity.id,
      team_id: entity.team_id,
      user_id: entity.user_id,
      role_id: entity.role_id,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<TeamUserDTO>) {
    const givenData = new TeamUser();

    givenData.id = dto.id;
    givenData.team_id = dto.team_id;
    givenData.user_id = dto.user_id;
    givenData.role_id = dto.role_id;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.deleted_at = dto.deleted_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

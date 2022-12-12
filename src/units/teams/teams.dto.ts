import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Team } from 'src/models/teams/teams.entity';

export class TeamsDTO implements Readonly<TeamsDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  broker_id: string;

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

  public static from(dto: Partial<TeamsDTO>) {
    const it = new TeamsDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.broker_id = dto.broker_id;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Team) {
    return this.from({
      id: entity.id,
      name: entity.name,
      broker_id: entity.broker_id,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<TeamsDTO>) {
    const givenData = new Team();
    givenData.id = dto.id;
    givenData.name = dto.name;
    givenData.broker_id = dto.broker_id;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

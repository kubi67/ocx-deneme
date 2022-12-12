import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Tasks } from 'src/models/task/tasks.entity';

export class TasksDTO implements Readonly<TasksDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  note_id: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  sys_ownered: boolean;

  @ApiProperty({ required: true })
  owner_id: string;

  @ApiProperty({ required: false })
  start_at: Date;

  @ApiProperty({ required: false })
  expire_at: Date;

  @ApiProperty({ required: false })
  assigned_user: string;

  @ApiProperty({ required: true })
  data: string;

  @ApiProperty({ required: true })
  state: number;

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

  public static from(dto: Partial<TasksDTO>) {
    const it = new TasksDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.note_id = dto.note_id;
    it.sys_ownered = dto.sys_ownered;
    it.owner_id = dto.owner_id;
    it.start_at = dto.start_at;
    it.expire_at = dto.expire_at;
    it.assigned_user = dto.assigned_user;
    it.data = dto.data;
    it.state = dto.state;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Tasks) {
    return this.from({
      id: entity.id,
      name: entity.name,
      note_id : entity.note_id,
      sys_ownered: entity.sys_ownered,
      owner_id: entity.owner_id,
      start_at: entity.start_at,
      expire_at: entity.expire_at,
      assigned_user: entity.assigned_user,
      data: entity.data,
      state: entity.state,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<TasksDTO>) {
    const givenData = new Tasks();
    givenData.id = dto.id;
    givenData.name = dto.name;
    givenData.note_id = dto.note_id;
    givenData.sys_ownered = dto.sys_ownered;
    givenData.owner_id = dto.owner_id;
    givenData.start_at = dto.start_at;
    givenData.expire_at = dto.expire_at;
    givenData.assigned_user = dto.assigned_user;
    givenData.data = dto.data;
    givenData.state = dto.state;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { UserContact } from 'src/models/users/user_contact.entity';

export class UserContactDTO implements Readonly<UserContactDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  contact_type: number;

  @ApiProperty({ required: true })
  contact_data: number;

  @ApiProperty({ required: true })
  status: number;

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

  public static from(dto: Partial<UserContactDTO>) {
    const it = new UserContactDTO();
    it.id = it.id;
    it.user_id = dto.user_id;
    it.contact_data = dto.contact_data;
    it.contact_type = dto.contact_type;
    it.status = dto.status;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: UserContact) {
    return this.from({
      id: entity.id,
      user_id: entity.user_id,
      contact_data: entity.contact_data,
      contact_type: entity.contact_type,
      status: entity.status,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<UserContactDTO>) {
    const givenData = new UserContact();
    givenData.id = dto.id;
    givenData.user_id = dto.user_id;
    givenData.contact_data = dto.contact_data;
    givenData.contact_type = dto.contact_type;
    givenData.status = dto.status;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

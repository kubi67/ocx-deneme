import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { UserAddress } from 'src/models/users/user_adress.entity';

export class UserAdressDTO implements Readonly<UserAdressDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
  address: string;

  @ApiProperty({ required: true })
  country: number;

  @ApiProperty({ required: true })
  state: number;

  @ApiProperty({ required: true })
  city: number;

  @ApiProperty({ required: true })
  zip_code: number;

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

  public static from(dto: Partial<UserAdressDTO>) {
    const it = new UserAdressDTO();
    it.id = it.id;
    it.user_id = dto.user_id;
    it.address = dto.address;
    it.country = dto.country;
    it.state = dto.state;
    it.city = dto.city;
    it.zip_code = dto.zip_code;
    it.status = dto.status;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: UserAddress) {
    return this.from({
      id: entity.id,
      user_id: entity.user_id,
      address: entity.address,
      country: entity.country,
      state: entity.state,
      city: entity.city,
      zip_code: entity.zip_code,
      status: entity.status,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<UserAdressDTO>) {
    const givenData = new UserAddress();
    givenData.id = dto.id;
    givenData.user_id = dto.user_id;
    givenData.address = dto.address;
    givenData.country = dto.country;
    givenData.state = dto.state;
    givenData.city = dto.city;
    givenData.zip_code = dto.zip_code;
    givenData.status = dto.status;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

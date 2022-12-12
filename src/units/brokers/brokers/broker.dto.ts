import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Roles } from 'src/models/rolesNpermissions/roles.entity';

export class BrokerDTO implements Readonly<BrokerDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  phone: string;

  @ApiProperty({ required: true })
  url: string;

  @ApiProperty({ required: false })
  imgUrl: string;

  @ApiProperty({ required: true })
  affiliate: boolean;

  @ApiProperty({ required: false })
  address: string;

  @ApiProperty({ required: false })
  country_id: number;

  @ApiProperty({ required: false })
  city_id: number;

  @ApiProperty({ required: false })
  state_id: string;

  @ApiProperty({ required: false })
  status: number;

  @ApiProperty({ required: false })
  owner_id: string;

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

  public static from(dto: Partial<BrokerDTO>) {
    const it = new BrokerDTO();
    it.id = dto.id;
    it.name = dto.name;
    it.imgUrl = dto.imgUrl;
    it.email = dto.email;
    it.phone = dto.phone;
    it.city_id = dto.city_id;
    it.state_id = dto.state_id;
    it.url = dto.url;
    it.affiliate = dto.affiliate;
    it.address = dto.address;
    it.country_id = dto.country_id;
    it.status = dto.status;
    it.owner_id = dto.owner_id;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Brokers) {
    return this.from({
      id: entity.id,
      name: entity.name,
      email: entity.email,
      imgUrl: entity.imgUrl,
      phone: entity.phone,
      url: entity.url,
      affiliate: entity.affiliate,
      address: entity.adress,
      country_id: entity.country_id,
      city_id: entity.city_id,
      state_id: entity.state_id,
      status: entity.status,
      owner_id: entity.owner_id,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<BrokerDTO>) {
    const givenData = new Brokers();
    givenData.id = dto.id;
    givenData.name = dto.name;
    givenData.email = dto.email;
    givenData.phone = dto.phone;
    givenData.url = dto.url;
    givenData.imgUrl = dto.imgUrl;
    givenData.affiliate = dto.affiliate;
    givenData.adress = dto.address;
    givenData.country_id = dto.country_id;
    givenData.status = dto.status;
    givenData.owner_id = dto.owner_id;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

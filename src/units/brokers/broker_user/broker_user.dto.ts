import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { BrokerAffiliate } from 'src/models/brokers/broker_affiliate.entity';
import { BrokerUser } from 'src/models/brokers/broker_user.entity';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Roles } from 'src/models/rolesNpermissions/roles.entity';

export class BrokerUserDTO implements Readonly<BrokerUserDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  broker_id: string;

  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true })
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

  public static from(dto: Partial<BrokerUserDTO>) {
    const it = new BrokerUserDTO();
    it.id = it.id;
    it.broker_id = dto.broker_id;
    it.user_id = dto.user_id;
    it.role_id = dto.role_id;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: BrokerUser) {
    return this.from({
      id: entity.id,
      broker_id: entity.broker_id,
      user_id: entity.user_id,
      role_id: entity.role_id,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<BrokerUserDTO>) {
    const givenData = new BrokerUser();
    givenData.id = dto.id;
    givenData.broker_id = dto.broker_id;
    givenData.user_id = dto.user_id;
    givenData.role_id = dto.role_id;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

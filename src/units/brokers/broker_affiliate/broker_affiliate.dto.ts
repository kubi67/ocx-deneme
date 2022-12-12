import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { BrokerAffiliate } from 'src/models/brokers/broker_affiliate.entity';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Roles } from 'src/models/rolesNpermissions/roles.entity';

export class BrokerAffiliateDTO implements Readonly<BrokerAffiliateDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  broker_id: string;

  @ApiProperty({ required: true })
  commission_rate: number;

  @ApiProperty({ required: true })
  tax_rate: number;

  @ApiProperty({ required: true })
  payment_method: number;

  @ApiProperty({ required: true })
  payment_setting: string;

  @ApiProperty({ required: false })
  payment_period: number;

  @ApiProperty({ required: false })
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

  public static from(dto: Partial<BrokerAffiliateDTO>) {
    const it = new BrokerAffiliateDTO();
    it.id = it.id;
    it.broker_id = dto.broker_id;
    it.commission_rate = dto.commission_rate;
    it.tax_rate = dto.tax_rate;
    it.payment_method = dto.payment_method;
    it.payment_setting = dto.payment_setting;
    it.payment_period = dto.payment_period;
    it.status = dto.status;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: BrokerAffiliate) {
    return this.from({
      id: entity.id,
      broker_id: entity.broker_id,
      commission_rate: entity.commission_rate,
      tax_rate: entity.tax_rate,
      payment_method: entity.payment_method,
      payment_setting: entity.payment_setting,
      payment_period: entity.payment_period,
      status: entity.status,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<BrokerAffiliateDTO>) {
    const givenData = new BrokerAffiliate();
    givenData.id = dto.id;
    givenData.broker_id = dto.broker_id;
    givenData.commission_rate = dto.commission_rate;
    givenData.tax_rate = dto.tax_rate;
    givenData.payment_method = dto.payment_method;
    givenData.payment_setting = dto.payment_setting;
    givenData.payment_period = dto.payment_period;
    givenData.status = dto.status;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

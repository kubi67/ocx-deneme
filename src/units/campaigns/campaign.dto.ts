import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { BrokerAffiliate } from 'src/models/brokers/broker_affiliate.entity';
import { BrokerUser } from 'src/models/brokers/broker_user.entity';
import { Adcampaigns } from 'src/models/campaigns/ad_campaigns.entity';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Roles } from 'src/models/rolesNpermissions/roles.entity';

export class AdCampaignsDTO implements Readonly<AdCampaignsDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  budget: number;

  @ApiProperty({ required: true })
  arrival: number;

  @ApiProperty({ required: false, default: null })
  broker_id: string;

  @ApiProperty({ required: true })
  identifier: string;

  @ApiProperty({ required: true })
  status: number;

  @ApiProperty({ required: true })
  utm_source: string;

  @ApiProperty({ required: true })
  utm_medium: string;

  @ApiProperty({ required: true })
  utm_campaign: string;

  @ApiProperty({ required: true })
  utm_content: string;

  @ApiProperty({ required: true })
  utm_term: string;

  @ApiProperty({ required: true })
  currency_type: string;

  @ApiProperty({ required: true })
  start_at: Date;

  @ApiProperty({ required: true })
  expire_at: Date;

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

  public static from(dto: Partial<AdCampaignsDTO>) {
    const it = new AdCampaignsDTO();
    it.id = dto.id;
    it.broker_id = dto.broker_id;
    it.name = dto.name;
    it.budget = dto.budget;
    it.arrival = dto.arrival;
    it.broker_id = dto.broker_id;
    it.identifier = dto.identifier;
    it.status = dto.status;
    it.utm_source = dto.utm_source;
    it.utm_medium = dto.utm_medium;
    it.utm_campaign = dto.utm_campaign;
    it.utm_content = dto.utm_content;
    it.utm_term = dto.utm_term;
    it.currency_type = dto.currency_type;
    it.start_at = dto.start_at;
    it.expire_at = dto.expire_at;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Adcampaigns) {
    return this.from({
      id: entity.id,
      broker_id: entity.broker_id,
      name: entity.name,
      budget: entity.budget,
      arrival: entity.arrival,
      identifier: entity.identifier,
      status: entity.status,
      utm_source: entity.utm_source,
      utm_medium: entity.utm_medium,
      utm_campaign: entity.utm_campaign,
      utm_content: entity.utm_content,
      utm_term: entity.utm_term,
      currency_type: entity.currency_type,
      start_at: entity.start_at,
      expire_at: entity.expire_at,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<AdCampaignsDTO>) {
    const givenData = new Adcampaigns();
    givenData.id = dto.id;
    givenData.broker_id = dto.broker_id;
    givenData.name = dto.name;
    givenData.budget = dto.budget;
    givenData.arrival = dto.arrival;
    givenData.identifier = dto.identifier;
    givenData.status = dto.status;
    givenData.utm_source = dto.utm_source;
    givenData.utm_medium = dto.utm_medium;
    givenData.utm_campaign = dto.utm_campaign;
    givenData.utm_content = dto.utm_content;
    givenData.utm_term = dto.utm_term;
    givenData.currency_type = dto.currency_type;
    givenData.start_at = dto.start_at;
    givenData.expire_at = dto.expire_at;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

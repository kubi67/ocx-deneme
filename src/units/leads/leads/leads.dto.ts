import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { Leads } from 'src/models/leads/leads.entity';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Roles } from 'src/models/rolesNpermissions/roles.entity';

export class LeadDTO implements Readonly<LeadDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  broker_id: string;

  @ApiProperty({ required: true })
  firstname: string;

  @ApiProperty({ required: true })
  lastname: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  phone: string;

  @ApiProperty({ required: true })
  state: number;

  @ApiProperty({ required: false })
  contact_preference: number;

  @ApiProperty({ required: false })
  campaign_id: string;

  @ApiProperty({ required: false })
  assigned_user: string;

  @ApiProperty({ required: false })
  isDelivered: boolean;

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

  public static from(dto: Partial<LeadDTO>) {
    const it = new LeadDTO();
    it.id = dto.id;
    it.broker_id = dto.broker_id;
    it.firstname = dto.firstname;
    it.lastname = dto.lastname;
    it.email = dto.email;
    it.state = dto.state;
    it.contact_preference = dto.contact_preference;
    it.campaign_id = dto.campaign_id;
    it.assigned_user = dto.assigned_user;
    it.isDelivered = dto.isDelivered;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Leads) {
    return this.from({
      id: entity.id,
      broker_id: entity.broker_id,
      firstname: entity.firstname,
      lastname: entity.lastname,
      email: entity.email,
      state: entity.state,
      contact_preference: entity.contact_preference,
      campaign_id: entity.campaign_id,
      assigned_user: entity.assigned_user,
      isDelivered: entity.isDelivered,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<LeadDTO>) {
    const givenData = new Leads();
    givenData.id = dto.id;
    givenData.broker_id = dto.broker_id;
    givenData.firstname = dto.firstname;
    givenData.lastname = dto.lastname;
    givenData.email = dto.email;
    givenData.state = dto.state;
    givenData.contact_preference = dto.contact_preference;
    givenData.campaign_id = dto.campaign_id;
    givenData.assigned_user = dto.assigned_user;
    givenData.isDelivered = dto.isDelivered;

    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

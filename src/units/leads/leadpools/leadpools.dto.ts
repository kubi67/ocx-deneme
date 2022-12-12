import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { LeadPool } from 'src/models/leads/lead_pool.entity';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Roles } from 'src/models/rolesNpermissions/roles.entity';

export class LeadPoolDTO implements Readonly<LeadPoolDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: true })
  campaign_id: string;

  @ApiProperty({ required: true })
  firstname: string;

  @ApiProperty({ required: true })
  lastname: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  phone: string;

  @ApiProperty({ required: true })
  assigned_broker: string;

  @ApiProperty({ required: true })
  assigned_user: string;

  @ApiProperty({ required: true })
  preference_user: string;

  @ApiProperty({ required: true })
  source_type: string;

  @ApiProperty({ required: true })
  source_id: string;

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

  public static from(dto: Partial<LeadPoolDTO>) {
    const it = new LeadPoolDTO();
    it.id = dto.id;
    it.campaign_id = dto.campaign_id;
    it.firstname = dto.firstname;
    it.lastname = dto.lastname;
    it.email = dto.email;
    it.phone = dto.phone;
    it.assigned_broker = dto.assigned_broker;
    it.assigned_user = dto.assigned_user;
    it.preference_user = dto.preference_user;
    it.source_type = dto.source_type;
    it.source_id = dto.source_id;
    it.state = dto.state;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: LeadPool) {
    return this.from({
      id: entity.id,
      campaign_id: entity.campaign_id,
      firstname: entity.firstname,
      lastname: entity.lastname,
      email: entity.email,
      phone: entity.phone,
      assigned_broker: entity.assigned_broker,
      preference_user: entity.preference_user,
      source_type: entity.source_type,
      source_id: entity.source_id,
      state: entity.state,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<LeadPoolDTO>) {
    const givenData = new LeadPool();
    givenData.id = dto.id;
    givenData.campaign_id = dto.campaign_id;
    givenData.firstname = dto.firstname;
    givenData.lastname = dto.lastname;
    givenData.email = dto.email;
    givenData.phone = dto.phone;
    givenData.assigned_broker = dto.assigned_broker;
    givenData.assigned_user = dto.assigned_user;
    givenData.preference_user = dto.preference_user;
    givenData.source_type = dto.source_type;
    givenData.source_id = dto.source_id;
    givenData.state = dto.state;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

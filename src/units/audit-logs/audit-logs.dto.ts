import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { BrokerAffiliate } from 'src/models/brokers/broker_affiliate.entity';
import { BrokerUser } from 'src/models/brokers/broker_user.entity';
import { AuditLog } from 'src/models/logs/audit_log.entity';
import { Permission } from 'src/models/rolesNpermissions/permissions.entity';
import { Roles } from 'src/models/rolesNpermissions/roles.entity';

export class AuditLogsDTO implements Readonly<AuditLogsDTO> {
  @ApiProperty({ required: false })
  id: string;

  @ApiProperty({ required: false })
  event_type: number;

  @ApiProperty({ required: false })
  event: string;

  @ApiProperty({ required: false })
  event_data: string;

  @ApiProperty({ required: false })
  url: string;

  @ApiProperty({ required: false })
  ip_addr: string;

  @ApiProperty({ required: false })
  user_agent: string;

  @ApiProperty({ required: false })
  tags: number;

  @ApiProperty({ required: false })
  user_id: string;

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

  public static from(dto: Partial<AuditLogsDTO>) {
    const it = new AuditLogsDTO();
    it.id = dto.id;
    it.event_type = dto.event_type;
    it.event = dto.event;
    it.event_data = dto.event_data;
    it.url = dto.url;
    it.ip_addr = dto.ip_addr;
    it.user_agent = dto.user_agent;
    it.tags = dto.tags;
    it.user_id = dto.user_id;

    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: AuditLog) {
    return this.from({
      id: entity.id,
      event_type: entity.event_type,
      event: entity.event,
      event_data: entity.event_data,
      url: entity.url,
      ip_addr: entity.ip_addr,
      user_agent: entity.user_agent,
      tags: entity.tags,
      user_id: entity.user_id,

      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<AuditLogsDTO>) {
    const givenData = new AuditLog();
    givenData.event_type = dto.event_type;
    givenData.event = dto.event;
    givenData.event_data = dto.event_data;
    givenData.url = dto.url;
    givenData.ip_addr = dto.ip_addr;
    givenData.user_agent = dto.user_agent;
    givenData.tags = dto.tags;
    givenData.user_id = dto.user_id;

    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.deleted_at = dto.deleted_at;
    givenData.isDeleted = dto.isDeleted;

    return givenData;
  }
}

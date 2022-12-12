import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsNumber,
  IsDate,
} from 'class-validator';
import { UserPerformance } from 'src/models/users/user_performance.entity';

export class UserPerformanceDTO implements Readonly<UserPerformanceDTO> {
  @ApiProperty()
  @IsString()
  id: string;
  @ApiProperty({ required: false })
  user_id: string;
  @ApiProperty({ required: false })
  @IsNumber()
  lead_capacity: number;
  @ApiProperty({ required: false })
  @IsNumber()
  total_lead: number;
  @ApiProperty()
  @IsString()
  assigned_by: string;
  @ApiProperty()
  @IsDate()
  last_assigned_at: Date;
  @ApiProperty()
  @IsNumber()
  point: number;

  @ApiProperty({ required: false })
  isDeleted: boolean;

  @ApiProperty({ required: false })
  created_at: Date;

  @ApiProperty({ required: false })
  updated_at: Date;

  @ApiProperty({ required: false })
  deleted_at: Date;

  @ApiProperty({ required: false })
  lastChangedDateTime: Date;

  public static from(dto: Partial<UserPerformanceDTO>) {
    const it = new UserPerformanceDTO();
    it.id = dto.id;
    it.user_id = dto.user_id;
    it.lead_capacity = dto.lead_capacity;
    it.total_lead = dto.total_lead;
    it.assigned_by = dto.assigned_by;
    it.last_assigned_at = dto.last_assigned_at;
    it.point = dto.point;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    
    return it;
  }

  public static fromEntity(entity: UserPerformance) {
    return this.from({
      id: entity.id,
      user_id : entity.user_id,
      lead_capacity : entity.lead_capacity,
      total_lead : entity.total_lead,
      assigned_by : entity.assigned_by,
      last_assigned_at : entity.last_assigned_at,
      point: entity.point,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
      
    });
  }

  public static toEntity(dto: Partial<UserPerformanceDTO>) {
    const givenData = new UserPerformance();

    givenData.user_id = dto.user_id;
    givenData.lead_capacity = dto.lead_capacity;
    givenData.total_lead = dto.total_lead;
    givenData.assigned_by = dto.assigned_by;
    givenData.last_assigned_at = dto.last_assigned_at;
    givenData.point = dto.point;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.deleted_at = dto.deleted_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.isDeleted = dto.isDeleted;
   

    return givenData;
  }
}

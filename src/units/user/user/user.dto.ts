import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsNumber,
  IsDate,
} from 'class-validator';
import { User } from 'src/models/users/user.entity';

export class UserDTO implements Readonly<UserDTO> {
  @ApiProperty({ required: false })
  id: string;
  @ApiProperty({ required: false })
  email: string;
  @ApiProperty({ required: false })
  @IsString()
  username: string;
  @ApiProperty()
  @IsString()
  password: string;
  @ApiProperty()
  parent_id: string;
  @ApiProperty()
  @IsNumber()
  status: number;
  @ApiProperty()
  two_factor_secret: string;
  @ApiProperty()
  two_factor_recover_code: string;
  @ApiProperty()
  two_factor_confirmed_at: Date;

  @ApiProperty({ required: false })
  isLeadOperator: boolean;

  @ApiProperty({ required: false })
  isTrader: boolean;

  @ApiProperty({ required: false })
  isLast: boolean;

  @ApiProperty()
  current_broker_id: string;
  @ApiProperty()
  @IsString()
  setting: string;
  @ApiProperty()
  @IsString()
  firstname: string;
  @ApiProperty()
  @IsString()
  lastname: string;

  @ApiProperty()
  access_token: string;
  @ApiProperty()
  refresh_token: string;
  @ApiProperty()
  token_expire_at: Date;
  @ApiProperty()
  isToken_expired: boolean;

  @ApiProperty()
  approved_by: string;

  @ApiProperty()
  approved_at: Date;

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

  @ApiProperty({ required: false })
  isApproved: boolean;

  @ApiProperty({ required: false })
  isVerified: boolean;

  public static from(dto: Partial<UserDTO>) {
    const it = new UserDTO();
    it.id = dto.id;
    it.isLeadOperator = dto.isLeadOperator;
    it.isTrader = dto.isTrader;
    it.isLast = dto.isLast;
    it.parent_id = dto.parent_id;
    it.status = dto.status;
    it.two_factor_secret = dto.two_factor_secret;
    it.two_factor_recover_code = dto.two_factor_recover_code;
    it.two_factor_confirmed_at = dto.two_factor_confirmed_at;
    it.current_broker_id = it.current_broker_id;
    it.setting = dto.setting;
    it.firstname = dto.firstname;
    it.lastname = dto.lastname;
    it.email = dto.email;
    it.username = dto.username;
    it.password = dto.password;
    it.access_token = dto.access_token;
    it.refresh_token = dto.refresh_token;
    it.token_expire_at = dto.token_expire_at;
    it.isToken_expired = dto.isToken_expired;
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    it.isApproved = dto.isApproved;
    it.isVerified = dto.isVerified;
    it.approved_by = dto.approved_by;
    it.approved_at = dto.approved_at;
    return it;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      parent_id: entity.parent_id,
      status: entity.status,
      email: entity.email,
      isLeadOperator: entity.isLeadOperator,
      isTrader: entity.isTrader,
      isLast: entity.isLast,
      username: entity.username,
      password: entity.password,
      two_factor_secret: entity.two_factor_secret,
      two_factor_recover_code: entity.two_factor_recover_code,
      two_factor_confirmed_at: entity.two_factor_confirmed_at,
      current_broker_id: entity.current_broker_id,
      setting: entity.setting,
      firstname: entity.firstname,
      lastname: entity.lastname,
      access_token: entity.access_token,
      refresh_token: entity.refresh_token,
      token_expire_at: entity.token_expire_at,
      isToken_expired: entity.isToken_expired,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
      isApproved: entity.isApproved,
      isVerified: entity.isVerified,
      approved_by: entity.approved_by,
      approved_at: entity.approved_at,
    });
  }

  public static toEntity(dto: Partial<UserDTO>) {
    const givenData = new User();

    givenData.email = dto.email;
    givenData.password = dto.password;
    givenData.username = dto.username;
    givenData.parent_id = dto.parent_id;
    givenData.status = dto.status;
    givenData.two_factor_secret = dto.two_factor_secret;
    givenData.two_factor_recover_code = dto.two_factor_recover_code;
    givenData.two_factor_confirmed_at = dto.two_factor_confirmed_at;
    givenData.current_broker_id = dto.current_broker_id;
    givenData.setting = dto.setting;
    givenData.firstname = dto.firstname;
    givenData.lastname = dto.lastname;
    givenData.access_token = dto.access_token;
    givenData.refresh_token = dto.refresh_token;
    givenData.token_expire_at = dto.token_expire_at;
    givenData.isToken_expired = dto.isToken_expired;
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.deleted_at = dto.deleted_at;
    givenData.isLeadOperator = dto.isLeadOperator;
    givenData.isTrader = dto.isTrader;
    givenData.isLast = dto.isLast;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.isDeleted = dto.isDeleted;
    givenData.isApproved = dto.isApproved;
    givenData.isVerified = dto.isVerified;
    givenData.approved_by = dto.approved_by;
    givenData.approved_at = dto.approved_at;

    return givenData;
  }
}

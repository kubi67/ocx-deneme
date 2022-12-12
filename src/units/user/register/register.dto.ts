import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsNumber,
  Matches,
} from 'class-validator';
import { User } from 'src/models/users/user.entity';

export class RegisterUsersDTO implements Readonly<RegisterUsersDTO> {
  @ApiProperty({ required: false })
  id: string;
  @ApiProperty({ required: false })
  @IsEmail()
  
  email: string;
  @ApiProperty({ required: false })
  @IsString()
  username: string;
  @ApiProperty()
  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
  @ApiProperty()
  @IsString()
  parent_id: string;
  @ApiProperty()
  @IsNumber()
  status: number;
  @ApiProperty()
  @IsString()
  two_factor_secret: string;
  @ApiProperty()
  @IsString()
  two_factor_recover_code: string;
  @ApiProperty()
  @IsString()
  two_factor_confirmed_at: Date;

  @ApiProperty()
  @IsString()
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

  public static from(dto: Partial<RegisterUsersDTO>) {
    const it = new RegisterUsersDTO();
    it.id = dto.id;
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
    it.created_at = dto.created_at;
    it.updated_at = dto.updated_at;
    it.deleted_at = dto.deleted_at;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    it.isApproved = dto.isApproved;
    it.isVerified = dto.isVerified;
    return it;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      parent_id: entity.parent_id,
      status: entity.status,
      email: entity.email,
      username: entity.username,
      password: entity.password,
      two_factor_secret: entity.two_factor_secret,
      two_factor_recover_code: entity.two_factor_recover_code,
      two_factor_confirmed_at: entity.two_factor_confirmed_at,
      current_broker_id: entity.current_broker_id,
      setting: entity.setting,
      firstname: entity.firstname,
      lastname: entity.lastname,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
      isApproved: entity.isApproved,
      isVerified: entity.isVerified,
    });
  }

  public static toEntity(dto: Partial<RegisterUsersDTO>) {
    const givenData = new User();
    givenData.id = dto.id;
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
    givenData.created_at = dto.created_at;
    givenData.updated_at = dto.updated_at;
    givenData.deleted_at = dto.deleted_at;
    givenData.lastChangedDateTime = dto.lastChangedDateTime;
    givenData.isDeleted = dto.isDeleted;
    givenData.isApproved = dto.isApproved;
    givenData.isVerified = dto.isVerified;
    

    return givenData;
  }
}

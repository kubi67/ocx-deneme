import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { User } from 'src/models/users/user.entity';

export class LoginUsersDTO implements Readonly<LoginUsersDTO> {
  @ApiProperty()
  id: string;
  @ApiProperty({ required: false })
  email: string;
  @ApiProperty({ required: false })
  @IsString()
  username: string;
  @ApiProperty()
  @IsString()
  password: string;

  public static from(dto: Partial<LoginUsersDTO>) {
    const it = new LoginUsersDTO();
    it.id = dto.id;
    it.email = dto.email;
    it.username = dto.username;
    it.password = dto.password;
    //it.Gsm = dto.Gsm;

    return it;
  }

  public static fromEntity(entity: User) {
    return this.from({
      //Gsm: entity.Gsm,
      id: entity.id,
      email: entity.email,
      username: entity.username,
      password: entity.password,
    });
  }

  public static toEntity(dto: Partial<LoginUsersDTO>) {
    const givenData = new User();
    givenData.id = dto.id;
    givenData.email = dto.email;
    givenData.password = dto.password;
    givenData.username = dto.username;
    //givenData.Gsm = dto.Gsm;

    return givenData;
  }
}

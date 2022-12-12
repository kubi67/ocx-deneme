import {
  Controller,
  Get,
  Param,
  Render,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './decorators/roles.decorator';
import { User } from './decorators/user.decorator';
import { Role } from './models/ownered/roles.enum';
import { SendMailService } from './scripts/mailer-scripts/mailer.service';
import { UsersService } from './units/user/user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailService: SendMailService,
    private readonly userService: UsersService,
  ) {}

  @Get('/send-mail/:id')
  @Render('index')
  async root(@Param('id') id: string) {
    try {
      const userData = await this.userService.getById(id);
      userData.isVerified = true;
      userData.isApproved = false;
      const updateUserData = await this.userService.update(
        userData.id,
        userData,
      );
      console.log(updateUserData);
      return {
        message: `Sn. ${updateUserData.firstname} ${updateUserData.lastname}`,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Get('/scripts/sendMail')
  async sendMail(): Promise<string> {
    this.mailService.sendMail(
      'dogukanc760@hotmail.com',
      'Kullanıcı Doğrulama',
      '',
      'Doğukan Canerler',
      'overcodex.com',
      'Bilgilendirme - Hata',
      'İşleyiş İçerisinde Ufak bir Hata Oluştu...',
      '123',
    );

    return 'Hello World!';
  }

  @Get('/test/guard')
  @Roles(Role.GetUser)
  async testGuard(@User() user) {
    return 'Hello World!';
  }
}

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { SendMailService } from './mailer.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          // host: 'mail.overcodex.com', //config.get('MAIL_HOST'),
          // port: 465,
          // secure: true,
          host: 'smtp-mail.outlook.com', //config.get('MAIL_HOST'),
          port: 587,
          auth: {
            user: 'dodoyeni@outlook.com', //config.get('MAIL_USER'),
            pass: 'kcinar22', //config.get('MAIL_PASSWORD'),
          },
          tls: {
            ciphers: 'SSLv3',
          },
          // tls:{ciphers: 'STARTTLS'}
        },
        
        defaults: {
          from: `"OverCodex" <mail>`,
        },
        template: {
          headers: 'https://overcodex.com/img/logo.png',
          //dir: join(__dirname, './templates'),
          dir: join('src/scripts/mailer-scripts/templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [SendMailService],
  exports: [SendMailService],
})
export class MailModule {}

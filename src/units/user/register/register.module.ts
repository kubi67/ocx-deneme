import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { User } from 'src/models/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from 'src/scripts/mailer-scripts/mailer.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MailModule],
  providers: [RegisterService],
  controllers: [RegisterController],
})
export class RegisterModule {}

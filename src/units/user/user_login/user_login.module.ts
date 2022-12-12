import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersLogin } from 'src/models/users/user_login.entity';
import { UserLoginController } from './user_login.controller';
import { UserLoginService } from './user_login.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersLogin])],
  providers: [UserLoginService],
  controllers: [UserLoginController],
  exports: [UserLoginService],
})
export class UserLoginModule {}

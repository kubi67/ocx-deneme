import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleUserModule } from './role_user/role_user.module';
import { TeamUserModule } from './team_user/team_user.module';
import { UserModule } from './user/user.module';
import { UsersService } from './user/user.service';

@Module({
  imports: [UserModule, TeamUserModule, RoleUserModule],
  providers: [UsersService],
  controllers: [],
  exports: [],
})
export class UserLayerModule {}

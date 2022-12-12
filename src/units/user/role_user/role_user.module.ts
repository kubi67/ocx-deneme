import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoles } from 'src/models/users/user_roles.entity';
import { UserRolesController } from './role_user.controller';
import { RoleUserService } from './role_user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoles])],
  providers: [RoleUserService],
  controllers: [UserRolesController],
  exports: [RoleUserService],
})
export class RoleUserModule {}

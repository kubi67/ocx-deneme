import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/users/user.entity';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { HttpModule } from '@nestjs/axios';
import { RolesModule } from 'src/units/roles/roles/roles.module';
import { RoleUserModule } from '../role_user/role_user.module';
import { PermissionsModule } from 'src/units/permissions/permissions.module';
import { PermUserModule } from '../perm_user/perm_user.module';
import { RolePermissionsModule } from 'src/units/roles/roles_permissions/roles_permissions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    HttpModule,
    RolesModule,
    RoleUserModule,
    PermissionsModule,
    PermUserModule,
    RolePermissionsModule,
  ],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UserModule {}

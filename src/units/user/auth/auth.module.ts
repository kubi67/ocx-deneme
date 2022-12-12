import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/users/user.entity';
import { PermissionsModule } from 'src/units/permissions/permissions.module';
import { RolesDescriptionModule } from 'src/units/roles/roles-description/roles-description.module';
import { RolesModule } from 'src/units/roles/roles/roles.module';
import { RolePermissionsModule } from 'src/units/roles/roles_permissions/roles_permissions.module';
import { PermUserModule } from '../perm_user/perm_user.module';
import { RoleUserModule } from '../role_user/role_user.module';
import { UserModule } from '../user/user.module';
import { UserLoginModule } from '../user_login/user_login.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
    UserLoginModule,
    RoleUserModule,
    PermUserModule,
    RolesModule,
    RolePermissionsModule,
    PermissionsModule,
    RolesDescriptionModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

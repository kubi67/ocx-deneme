import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePermissions } from 'src/models/rolesNpermissions/role_permissions.entity';
import { PermissionsModule } from 'src/units/permissions/permissions.module';
import { PermissionsService } from 'src/units/permissions/permissions.service';
import { RolesModule } from '../roles/roles.module';
import { RolesPermissionsController } from './roles_permissions.controller';
import { RolePermissionsService } from './roles_permissions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RolePermissions]),
    PermissionsModule,
    RolesModule,
  ],
  providers: [RolePermissionsService],
  controllers: [RolesPermissionsController],
  exports: [RolePermissionsService],
})
export class RolePermissionsModule {}

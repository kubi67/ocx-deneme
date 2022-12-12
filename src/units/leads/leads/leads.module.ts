import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leads } from 'src/models/leads/leads.entity';
import { RolesDescriptionModule } from 'src/units/roles/roles-description/roles-description.module';
import { RolesModule } from 'src/units/roles/roles/roles.module';
import { RoleUserModule } from 'src/units/user/role_user/role_user.module';
import { UserModule } from 'src/units/user/user/user.module';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Leads]),
    UserModule,
    RolesModule,
    RoleUserModule,
    RolesDescriptionModule
  ],
  controllers: [LeadsController],
  providers: [LeadsService],
  exports: [LeadsService],
})
export class LeadsModule {}

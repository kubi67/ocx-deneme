import { Module } from '@nestjs/common';
import { RolesDescriptionService } from './roles-description.service';
import { RolesDescriptionController } from './roles-description.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesDescription } from 'src/models/rolesNpermissions/roles_description.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RolesDescription])],
  providers: [RolesDescriptionService],
  controllers: [RolesDescriptionController],
  exports: [RolesDescriptionService]
})
export class RolesDescriptionModule {}

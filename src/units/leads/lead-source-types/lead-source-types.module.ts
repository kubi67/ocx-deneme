import { Module } from '@nestjs/common';
import { LeadSourceTypesService } from './lead-source-types.service';
import { LeadSourceTypesController } from './lead-source-types.controller';
import { LeadSourceTypes } from 'src/models/leads/lead_source_types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LeadSourceTypes])],
  providers: [LeadSourceTypesService],
  controllers: [LeadSourceTypesController]
})
export class LeadSourceTypesModule {}

import { Module } from '@nestjs/common';
import { LeadStateDescriptionService } from './lead-state-description.service';
import { LeadStateDescriptionController } from './lead-state-description.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadStatesDescriptions } from 'src/models/leads/lead_state_descriptions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeadStatesDescriptions])],
  providers: [LeadStateDescriptionService],
  controllers: [LeadStateDescriptionController],
})
export class LeadStateDescriptionModule {}

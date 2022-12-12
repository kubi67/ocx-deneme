import { Module } from '@nestjs/common';
import { LeadStatesService } from './lead-states.service';
import { LeadStatesController } from './lead-states.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadStates } from 'src/models/leads/lead_states.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeadStates])],
  providers: [LeadStatesService],
  controllers: [LeadStatesController]
})
export class LeadStatesModule {}

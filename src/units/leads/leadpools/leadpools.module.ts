import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadPool } from 'src/models/leads/lead_pool.entity';
import { LeadPoolsController } from './leadpools.controller';
import { LeadpoolsService } from './leadpools.service';

@Module({
  imports:[TypeOrmModule.forFeature([LeadPool]),],
  providers: [LeadpoolsService],
  controllers: [LeadPoolsController],
  exports: [LeadpoolsService],
})
export class LeadpoolsModule {}

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Adcampaigns } from 'src/models/campaigns/ad_campaigns.entity';
import { AdCampaignsController } from './campaigns.controller';
import { AdCampaignsService } from './campaigns.service';

@Module({
  imports: [TypeOrmModule.forFeature([Adcampaigns])],
  providers: [AdCampaignsService],
  controllers: [AdCampaignsController]
})
export class CampaignsModule {}

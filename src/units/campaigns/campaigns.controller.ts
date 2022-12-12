import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { AdCampaignsDTO } from './campaign.dto';
import { AdCampaignsService } from './campaigns.service';

@Controller('ad-campaigns')
@ApiTags('Ad Campaigns Endpoints')
@UseInterceptors(TransformInterceptor) 
export class AdCampaignsController {
  constructor(private readonly adCampaignService: AdCampaignsService) {}

  @Get()
  public async getAll(): Promise<AdCampaignsDTO[]> {
    return await this.adCampaignService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<AdCampaignsDTO[]> {
    return await this.adCampaignService.getAllByStatus(status);
  }

  @Get('/by-broker/:broker')
  public async getByBroker(
    @Param('broker') broker: string,
  ): Promise<AdCampaignsDTO[]> {
    return await this.adCampaignService.getByBrokerID(broker);
  }

  @Get('/by-utm-source/:utm-source')
  public async getByUtmSource(
    @Param('utm-source') utmSource: string,
  ): Promise<AdCampaignsDTO[]> {
    return await this.adCampaignService.getByUtmSource(utmSource);
  }

  @Get('/by-campaign/:campaign')
  public async getByCampaign(
    @Param('campaign') campaign: string,
  ): Promise<AdCampaignsDTO[]> {
    return await this.adCampaignService.getByUtmCampaign(campaign);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<AdCampaignsDTO> {
    return await this.adCampaignService.getById(id);
  }

  @Post()
  public async create(@Body() dto: AdCampaignsDTO): Promise<AdCampaignsDTO> {
    return await this.adCampaignService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: AdCampaignsDTO,
  ): Promise<AdCampaignsDTO> {
    return await this.adCampaignService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<AdCampaignsDTO> {
    return await this.adCampaignService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.adCampaignService.hardDelete(id);
  }
}

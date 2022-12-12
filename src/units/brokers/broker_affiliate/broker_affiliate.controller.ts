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
import { BrokerAffiliateDTO } from './broker_affiliate.dto';
import { BrokerAffiliateService } from './broker_affiliate.service';

@Controller('broker-affiliate')
@ApiTags('Broker Affiliate Endpoints')
@UseInterceptors(TransformInterceptor)
export class BrokerAffiliateController {
  constructor(
    private readonly brokerAffiliateService: BrokerAffiliateService,
  ) {}

  @Get()
  public async getAll(): Promise<BrokerAffiliateDTO[]> {
    return await this.brokerAffiliateService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<BrokerAffiliateDTO[]> {
    return await this.brokerAffiliateService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<BrokerAffiliateDTO> {
    return await this.brokerAffiliateService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: BrokerAffiliateDTO,
  ): Promise<BrokerAffiliateDTO> {
    return await this.brokerAffiliateService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: BrokerAffiliateDTO,
  ): Promise<BrokerAffiliateDTO> {
    return await this.brokerAffiliateService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<BrokerAffiliateDTO> {
    return await this.brokerAffiliateService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.brokerAffiliateService.hardDelete(id);
  }
}

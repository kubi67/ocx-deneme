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
import { BrokerDTO } from './broker.dto';
import { BrokersService } from './brokers.service';

@Controller('brokers')
@ApiTags('Broker Endpoints')
@UseInterceptors(TransformInterceptor)
export class BrokerController {
  constructor(private readonly brokerService: BrokersService) {}

  @Get()
  public async getAll(): Promise<BrokerDTO[]> {
    return await this.brokerService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<BrokerDTO[]> {
    return await this.brokerService.getAllByStatus(status);
  }

  @Get('/simple-broker')
  public async getSimpleBroker(): Promise<any> {
    return await this.brokerService.getSimpleAllBrokers();
  }

  @Get('/simple-broker-by-id/:id')
  public async getSimpleBrokerById(@Param('id') id: string): Promise<any> {
    return await this.brokerService.getSimpleBrokerByID(id);
  }

  @Get('/simple-broker-manager')
  public async getSimpleBrokerManager(): Promise<any> {
    return await this.brokerService.getSimpleAllBrokerManager();
  }

  @Get('/simple-broker-manager-by-id/:id')
  public async getSimpleBrokerManagerByID(
    @Param('id') id: string,
  ): Promise<any> {
    return await this.brokerService.getSimpleBrokerManagerByID(id);
  }

  @Get('/by-owner/:owner')
  public async getByOwner(@Param('owner') id: string): Promise<any> {
    return await this.brokerService.getByOwner(id);
  }

  @Get('/by-country/:country')
  public async getByCountry(@Param('country') country: number): Promise<any> {
    return await this.brokerService.getByCountry(country);
  }

  @Get('/by-city/:city')
  public async getByCity(@Param('city') city: number): Promise<any> {
    return await this.brokerService.getByCity(city);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<BrokerDTO> {
    return await this.brokerService.getById(id);
  }

  @Post()
  public async create(@Body() dto: BrokerDTO): Promise<BrokerDTO> {
    return await this.brokerService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: BrokerDTO,
  ): Promise<BrokerDTO> {
    return await this.brokerService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<BrokerDTO> {
    return await this.brokerService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.brokerService.hardDelete(id);
  }
}

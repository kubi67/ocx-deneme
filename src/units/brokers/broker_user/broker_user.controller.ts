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
import { BrokerUserDTO } from './broker_user.dto';
import { BrokerUserService } from './broker_user.service';

@Controller('broker-user')
@ApiTags('Broker User Endpoints')
@UseInterceptors(TransformInterceptor)
export class BrokerUserController {
  constructor(private readonly brokerUserService: BrokerUserService) {}

  @Get()
  public async getAll(): Promise<BrokerUserDTO[]> {
    return await this.brokerUserService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<BrokerUserDTO[]> {
    return await this.brokerUserService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<BrokerUserDTO> {
    return await this.brokerUserService.getById(id);
  }

  @Post()
  public async create(@Body() dto: BrokerUserDTO): Promise<BrokerUserDTO> {
    return await this.brokerUserService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: BrokerUserDTO,
  ): Promise<BrokerUserDTO> {
    return await this.brokerUserService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<BrokerUserDTO> {
    return await this.brokerUserService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.brokerUserService.hardDelete(id);
  }
}

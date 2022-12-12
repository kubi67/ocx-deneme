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
import { LdStrategyDTO } from './ld-strategy.dto';
import { LdStrategyService } from './ld-strategy.service';

@Controller('ld-strategy')
@ApiTags('Ld Strategy Endpoints')
@UseInterceptors(TransformInterceptor)
export class LdStrategyController {
  constructor(private readonly ldStrategyService: LdStrategyService) {}

  @Get()
  public async getAll(): Promise<LdStrategyDTO[]> {
    return await this.ldStrategyService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<LdStrategyDTO[]> {
    return await this.ldStrategyService.getAllByStatus(status);
  }

  @Get('/by-name/:name')
  public async getByModelID(
    @Param('name') name: string,
  ): Promise<LdStrategyDTO[]> {
    return await this.ldStrategyService.getByName(name);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<LdStrategyDTO> {
    return await this.ldStrategyService.getById(id);
  }

  @Post()
  public async create(@Body() dto: LdStrategyDTO): Promise<LdStrategyDTO> {
    return await this.ldStrategyService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: LdStrategyDTO,
  ): Promise<LdStrategyDTO> {
    return await this.ldStrategyService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<LdStrategyDTO> {
    return await this.ldStrategyService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.ldStrategyService.hardDelete(id);
  }
}

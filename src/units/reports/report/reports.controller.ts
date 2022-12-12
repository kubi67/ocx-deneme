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
import { ReportsDTO } from './reports.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
@ApiTags('Reports Endpoints')
@UseInterceptors(TransformInterceptor)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  public async getAll(): Promise<ReportsDTO[]> {
    return await this.reportsService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<ReportsDTO[]> {
    return await this.reportsService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<ReportsDTO> {
    return await this.reportsService.getById(id);
  }

  @Get('/active-leads/:status')
  public async getLeadsFull() {
    return await this.reportsService.getAllWithAll();
  }

  @Get('/by-owner/:id')
  public async getByOwner(@Param('id') id: string): Promise<ReportsDTO[]> {
    return await this.reportsService.getByOwner(id);
  }

  @Get('/by-state/:state')
  public async getByState(
    @Param('state') state: number,
  ): Promise<ReportsDTO[]> {
    return await this.reportsService.getByState(state);
  }

  @Post()
  public async create(@Body() dto: ReportsDTO): Promise<ReportsDTO> {
    return await this.reportsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: ReportsDTO,
  ): Promise<ReportsDTO> {
    return await this.reportsService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<ReportsDTO> {
    return await this.reportsService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.reportsService.hardDelete(id);
  }
}

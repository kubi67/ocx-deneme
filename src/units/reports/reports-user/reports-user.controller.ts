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
import { ReportsUserDTO } from './reports-user.dto';
import { ReportsUserService } from './reports-user.service';

@Controller('report-user')
@ApiTags('Report User Endpoints')
@UseInterceptors(TransformInterceptor)
export class ReportsUserController {
  constructor(private readonly reportUserService: ReportsUserService) {}

  @Get()
  public async getAll(): Promise<ReportsUserDTO[]> {
    return await this.reportUserService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<ReportsUserDTO[]> {
    return await this.reportUserService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<ReportsUserDTO> {
    return await this.reportUserService.getById(id);
  }

  @Get('/active-leads/:status')
  public async getLeadsFull() {
    return await this.reportUserService.getAllWithAll();
  }

  @Get('/by-user/:id')
  public async getByOwner(@Param('id') id: string): Promise<ReportsUserDTO[]> {
    return await this.reportUserService.getByUser(id);
  }

  @Get('/by-report/:id')
  public async getByReport(@Param('id') id: string): Promise<ReportsUserDTO[]> {
    return await this.reportUserService.getByReport(id);
  }

  @Post()
  public async create(@Body() dto: ReportsUserDTO): Promise<ReportsUserDTO> {
    return await this.reportUserService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: ReportsUserDTO,
  ): Promise<ReportsUserDTO> {
    return await this.reportUserService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<ReportsUserDTO> {
    return await this.reportUserService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.reportUserService.hardDelete(id);
  }
}

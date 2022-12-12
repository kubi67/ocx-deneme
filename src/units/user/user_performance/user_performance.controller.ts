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
import { UserPerformanceDTO } from './user_performance.dto';
import { UserPerformanceService } from './user_performance.service';

@Controller('user-performances')
@ApiTags('User Performances Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserPerformanceController {
  constructor(
    private readonly userPerformanceService: UserPerformanceService,
  ) {}

  @Get()
  public async getAll(): Promise<UserPerformanceDTO[]> {
    return await this.userPerformanceService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<UserPerformanceDTO[]> {
    return await this.userPerformanceService.getAllByStatus(status);
  }

  @Get('/by-assigned/:assigned')
  public async getAllByAssigned(@Param('assigned') assigned: string) {
    return await this.userPerformanceService.getByAssignedBy(assigned);
  }


  @Get('/by-user/:userID')
  public async getAllByUser(@Param('userID') userID: string) {
    return await this.userPerformanceService.getByUser(userID);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<UserPerformanceDTO> {
    return await this.userPerformanceService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: UserPerformanceDTO,
  ): Promise<UserPerformanceDTO> {
    return await this.userPerformanceService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UserPerformanceDTO,
  ): Promise<UserPerformanceDTO> {
    return await this.userPerformanceService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<UserPerformanceDTO> {
    return await this.userPerformanceService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.userPerformanceService.hardDelete(id);
  }
}

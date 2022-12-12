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
import { CalendarDetailDTO } from './calendar-detail.dto';
import { CalendarDetailService } from './calendar-detail.service';

@Controller('calendar-detail')
@ApiTags('Calendar Detail Endpoints')
@UseInterceptors(TransformInterceptor)
export class CalendarDetailController {
  constructor(private readonly calendarDetailService: CalendarDetailService) {}

  @Get()
  public async getAll(): Promise<CalendarDetailDTO[]> {
    return await this.calendarDetailService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<CalendarDetailDTO[]> {
    return await this.calendarDetailService.getAllByStatus(status);
  }

  @Get('/by-calendar/:id')
  public async getByCalendar(
    @Param('id') id: string,
  ): Promise<CalendarDetailDTO[]> {
    return await this.calendarDetailService.getByCalendar(id);
  }

  @Get('/by-calendar-space/:id')
  public async getByCalendarSpace(
    @Param('id') id: string,
  ): Promise<CalendarDetailDTO[]> {
    return await this.calendarDetailService.getByCalendarSpace(id);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<CalendarDetailDTO> {
    return await this.calendarDetailService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: CalendarDetailDTO,
  ): Promise<CalendarDetailDTO> {
    return await this.calendarDetailService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: CalendarDetailDTO,
  ): Promise<CalendarDetailDTO> {
    return await this.calendarDetailService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<CalendarDetailDTO> {
    return await this.calendarDetailService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.calendarDetailService.hardDelete(id);
  }
}

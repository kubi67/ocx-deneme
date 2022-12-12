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
import { CalendarSpaceDTO } from './calendar-space.dto';
import { CalendarSpaceService } from './calendar-space.service';

@Controller('calendar-space')
@ApiTags('Calendar Space Endpoints')
@UseInterceptors(TransformInterceptor)
export class CalendarSpaceController {
  constructor(private readonly calendarSpaceService: CalendarSpaceService) {}

  @Get()
  public async getAll(): Promise<CalendarSpaceDTO[]> {
    return await this.calendarSpaceService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<CalendarSpaceDTO[]> {
    return await this.calendarSpaceService.getAllByStatus(status);
  }

  @Get('/by-calendar/:id')
  public async getByCalendar(
    @Param('id') id: string,
  ): Promise<CalendarSpaceDTO[]> {
    return await this.calendarSpaceService.getByCalendar(id);
  }

  @Get('/by-owner/:id')
  public async getByOwner(
    @Param('id') id: string,
  ): Promise<CalendarSpaceDTO[]> {
    return await this.calendarSpaceService.getByOwner(id);
  }

  @Get('/by-identity/:owner/:calendar')
  public async getByIdentity(
    @Param('owner') owner: string,
    @Param('calendar') calendar: string,
  ): Promise<CalendarSpaceDTO[]> {
    return await this.calendarSpaceService.getByIdentity(owner, calendar);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<CalendarSpaceDTO> {
    return await this.calendarSpaceService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: CalendarSpaceDTO,
  ): Promise<CalendarSpaceDTO> {
    return await this.calendarSpaceService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: CalendarSpaceDTO,
  ): Promise<CalendarSpaceDTO> {
    return await this.calendarSpaceService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<CalendarSpaceDTO> {
    return await this.calendarSpaceService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.calendarSpaceService.hardDelete(id);
  }
}

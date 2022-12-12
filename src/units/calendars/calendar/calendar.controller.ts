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
import { CalendarDTO } from './calendar.dto';
import { CalendarService } from './calendar.service';


@Controller('calendar')
@ApiTags('Calendar Endpoints')
@UseInterceptors(TransformInterceptor)
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  public async getAll(): Promise<CalendarDTO[]> {
    return await this.calendarService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<CalendarDTO[]> {
    return await this.calendarService.getAllByStatus(status);
  }

  @Get('/by-name/:name')
  public async getByModelID(
    @Param('name') name: string,
  ): Promise<CalendarDTO[]> {
    return await this.calendarService.getByName(name);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<CalendarDTO> {
    return await this.calendarService.getById(id);
  }

  @Post()
  public async create(@Body() dto: CalendarDTO): Promise<CalendarDTO> {
    return await this.calendarService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: CalendarDTO,
  ): Promise<CalendarDTO> {
    return await this.calendarService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<CalendarDTO> {
    return await this.calendarService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.calendarService.hardDelete(id);
  }
}

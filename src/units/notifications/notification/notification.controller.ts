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
import { NotificationDTO } from './notification.dto';
import { NotificationService } from './notification.service';


@Controller('notification')
@ApiTags('Notification Endpoints')
@UseInterceptors(TransformInterceptor)
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  public async getAll(): Promise<NotificationDTO[]> {
    return await this.notificationService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<NotificationDTO[]> {
    return await this.notificationService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<NotificationDTO> {
    return await this.notificationService.getById(id);
  }

  @Get('/active-leads/:status')
  public async getLeadsFull() {
    return await this.notificationService.getAllWithAll();
  }

  @Get('/by-type/:type')
  public async getByTyper(
    @Param('type') type: number,
  ): Promise<NotificationDTO[]> {
    return await this.notificationService.getByNotificationType(type);
  }

  @Post()
  public async create(@Body() dto: NotificationDTO): Promise<NotificationDTO> {
    return await this.notificationService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: NotificationDTO,
  ): Promise<NotificationDTO> {
    return await this.notificationService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<NotificationDTO> {
    return await this.notificationService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.notificationService.hardDelete(id);
  }
}

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
import { NotificationDeliveryDTO } from './notification-delivery.dto';
import { NotificationDeliveryService } from './notification-delivery.service';

@Controller('notification-delivery')
@ApiTags('Notification Delivery Endpoints')
@UseInterceptors(TransformInterceptor)
export class NotificationDeliveryController {
  constructor(
    private readonly notificationDeliveryService: NotificationDeliveryService,
  ) {}

  @Get()
  public async getAll(): Promise<NotificationDeliveryDTO[]> {
    return await this.notificationDeliveryService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<NotificationDeliveryDTO[]> {
    return await this.notificationDeliveryService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<NotificationDeliveryDTO> {
    return await this.notificationDeliveryService.getById(id);
  }

  @Get('/active-leads/:status')
  public async getLeadsFull() {
    return await this.notificationDeliveryService.getAllWithAll();
  }

  @Get('/by-user/:id')
  public async getByUser(
    @Param('id') id: string,
  ): Promise<NotificationDeliveryDTO[]> {
    return await this.notificationDeliveryService.getByUser(id);
  }

  @Get('/by-notification/:id')
  public async getByNotification(
    @Param('id') id: string,
  ): Promise<NotificationDeliveryDTO[]> {
    return await this.notificationDeliveryService.getByNotification(id);
  }

  @Post()
  public async create(
    @Body() dto: NotificationDeliveryDTO,
  ): Promise<NotificationDeliveryDTO> {
    return await this.notificationDeliveryService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: NotificationDeliveryDTO,
  ): Promise<NotificationDeliveryDTO> {
    return await this.notificationDeliveryService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<NotificationDeliveryDTO> {
    return await this.notificationDeliveryService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.notificationDeliveryService.hardDelete(id);
  }
}

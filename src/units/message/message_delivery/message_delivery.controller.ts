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
import { MessageDeliveryDTO } from './message_delivery.dto';
import { MessageDeliveryService } from './message_delivery.service';

@Controller('message-delivery')
@ApiTags('Message Delivery Endpoints')
@UseInterceptors(TransformInterceptor)
export class MessageDeliveryController {
  constructor(
    private readonly messageDeliveryService: MessageDeliveryService,
  ) {}

  @Get()
  public async getAll(): Promise<MessageDeliveryDTO[]> {
    return await this.messageDeliveryService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<MessageDeliveryDTO[]> {
    return await this.messageDeliveryService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<MessageDeliveryDTO> {
    return await this.messageDeliveryService.getById(id);
  }

  @Get('/active-leads/:status')
  public async getLeadsFull() {
    return await this.messageDeliveryService.getAllWithAll();
  }

  @Get('/by-message/:message')
  public async getByMessage(
    @Param('message') message: string,
  ): Promise<MessageDeliveryDTO[]> {
    return await this.messageDeliveryService.getByMessage(message);
  }

  @Get('/by-user/:user')
  public async getByUser(
    @Param('user') user: string,
  ): Promise<MessageDeliveryDTO[]> {
    return await this.messageDeliveryService.getByUser(user);
  }

  @Post()
  public async create(
    @Body() dto: MessageDeliveryDTO,
  ): Promise<MessageDeliveryDTO> {
    return await this.messageDeliveryService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: MessageDeliveryDTO,
  ): Promise<MessageDeliveryDTO> {
    return await this.messageDeliveryService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<MessageDeliveryDTO> {
    return await this.messageDeliveryService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.messageDeliveryService.hardDelete(id);
  }
}

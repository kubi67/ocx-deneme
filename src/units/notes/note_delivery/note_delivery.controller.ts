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
import { NoteDeliveryDTO } from './note_delivery.dto';
import { NoteDeliveryService } from './note_delivery.service';

@Controller('note-delivery')
@ApiTags('Note Delivery Endpoints')
@UseInterceptors(TransformInterceptor)
export class NoteDeliveryController {
  constructor(private readonly noteDeliveriesService: NoteDeliveryService) {}

  @Get()
  public async getAll(): Promise<NoteDeliveryDTO[]> {
    return await this.noteDeliveriesService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<NoteDeliveryDTO[]> {
    return await this.noteDeliveriesService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<NoteDeliveryDTO> {
    return await this.noteDeliveriesService.getById(id);
  }

  @Get('/active-leads/:status')
  public async getLeadsFull() {
    return await this.noteDeliveriesService.getAllWithAll();
  }

  @Get('/get-by-note/:id')
  public async getByNote(@Param('id') id: string): Promise<NoteDeliveryDTO[]> {
    return await this.noteDeliveriesService.getByNote(id);
  }

  @Get('/get-by-user/:id')
  public async getByUser(@Param('id') id: string): Promise<NoteDeliveryDTO[]> {
    return await this.noteDeliveriesService.getByUser(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: NoteDeliveryDTO,
  ): Promise<NoteDeliveryDTO> {
    return await this.noteDeliveriesService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<NoteDeliveryDTO> {
    return await this.noteDeliveriesService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.noteDeliveriesService.hardDelete(id);
  }
}

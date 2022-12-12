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
import { MessageBoardDTO } from './messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
@ApiTags('Messages Endpoints')
@UseInterceptors(TransformInterceptor)
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  public async getAll(): Promise<MessageBoardDTO[]> {
    return await this.messagesService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<MessageBoardDTO[]> {
    return await this.messagesService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<MessageBoardDTO> {
    return await this.messagesService.getById(id);
  }

  @Get('/active-leads/:status')
  public async getLeadsFull() {
    return await this.messagesService.getAllWithAll();
  }

  @Get('/get-author/:author')
  public async getByAuthor(
    @Param('author') author: string,
  ): Promise<MessageBoardDTO[]> {
    return await this.messagesService.getByAuthor(author);
  }

  @Post()
  public async create(@Body() dto: MessageBoardDTO): Promise<MessageBoardDTO> {
    return await this.messagesService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: MessageBoardDTO,
  ): Promise<MessageBoardDTO> {
    return await this.messagesService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<MessageBoardDTO> {
    return await this.messagesService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.messagesService.hardDelete(id);
  }
}

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
import { TasksDTO } from './tasks.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
@ApiTags('Tasks Endpoints')
@UseInterceptors(TransformInterceptor)
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  public async getAll(): Promise<TasksDTO[]> {
    return await this.taskService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<TasksDTO[]> {
    return await this.taskService.getAllByStatus(status);
  }

  @Get('/by-name/:name')
  public async getByName(@Param('name') name: string): Promise<TasksDTO[]> {
    return await this.taskService.getByName(name);
  }

  @Get('/by-owner/:id')
  public async getByOwnerID(@Param('id') id: string): Promise<TasksDTO[]> {
    return await this.taskService.getByOwnerID(id);
  }

  @Get('/by-assigned/:id')
  public async getByAssigned(@Param('id') id: string): Promise<TasksDTO[]> {
    return await this.taskService.getByAssigned(id);
  }

  @Get('/by-owner/:ownered')
  public async getByOwnered(
    @Param('ownered') ownered: boolean,
  ): Promise<TasksDTO[]> {
    return await this.taskService.getByOwnered(ownered);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<TasksDTO> {
    return await this.taskService.getById(id);
  }

  @Post()
  public async create(@Body() dto: TasksDTO): Promise<TasksDTO> {
    return await this.taskService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: TasksDTO,
  ): Promise<TasksDTO> {
    return await this.taskService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<TasksDTO> {
    return await this.taskService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.taskService.hardDelete(id);
  }
}

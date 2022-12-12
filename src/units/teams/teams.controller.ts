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
import { TeamsDTO } from './teams.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
@ApiTags('Teams Endpoints')
@UseInterceptors(TransformInterceptor)
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {}

  @Get()
  public async getAll(): Promise<TeamsDTO[]> {
    return await this.teamService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<TeamsDTO[]> {
    return await this.teamService.getAllByStatus(status);
  }


  @Get('/by-name/:name')
  public async getByName(
    @Param('name') name: string,
  ): Promise<TeamsDTO[]> {
    return await this.teamService.getByName(name);
  }

  @Get('/by-broker/:id')
  public async getByBroker(
    @Param('id') id: string,
  ): Promise<TeamsDTO[]> {
    return await this.teamService.getByBrokerID(id);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<TeamsDTO> {
    return await this.teamService.getById(id);
  }

  @Post()
  public async create(@Body() dto: TeamsDTO): Promise<TeamsDTO> {
    return await this.teamService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: TeamsDTO,
  ): Promise<TeamsDTO> {
    return await this.teamService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<TeamsDTO> {
    return await this.teamService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.teamService.hardDelete(id);
  }
}

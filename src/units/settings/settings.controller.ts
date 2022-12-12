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
import { SettingsDTO } from './settings.dto';
import { SettingsService } from './settings.service';

@Controller('settings')
@ApiTags('Settings Endpoints')
@UseInterceptors(TransformInterceptor)
export class SettingsController {
  constructor(private readonly settingService: SettingsService) {}

  @Get()
  public async getAll(): Promise<SettingsDTO[]> {
    return await this.settingService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<SettingsDTO[]> {
    return await this.settingService.getAllByStatus(status);
  }

  @Get('/by-modelid/:id')
  public async getByModelID(@Param('id') id: string): Promise<SettingsDTO[]> {
    return await this.settingService.getByModelID(id);
  }

  @Get('/by-model-name/:name')
  public async getByModelName(@Param('name') name: string): Promise<SettingsDTO[]> {
    return await this.settingService.getByModelName(name);
  }

  @Get('/by-creator/:id')
  public async getByCreator(@Param('id') id: string): Promise<SettingsDTO[]> {
    return await this.settingService.getByCreatedBy(id);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<SettingsDTO> {
    return await this.settingService.getById(id);
  }

  @Post()
  public async create(@Body() dto: SettingsDTO): Promise<SettingsDTO> {
    return await this.settingService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: SettingsDTO,
  ): Promise<SettingsDTO> {
    return await this.settingService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<SettingsDTO> {
    return await this.settingService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.settingService.hardDelete(id);
  }
}

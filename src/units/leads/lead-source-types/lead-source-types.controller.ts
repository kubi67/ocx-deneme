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
import { LeadSourceTypesDTO } from './lead-source-types.dto';
import { LeadSourceTypesService } from './lead-source-types.service';

@Controller('lead-source-types')
@ApiTags('Lead Source Types Endpoints')
@UseInterceptors(TransformInterceptor)
export class LeadSourceTypesController {
  constructor(
    private readonly leadSourceTypesService: LeadSourceTypesService,
  ) {}

  @Get()
  public async getAll(): Promise<LeadSourceTypesDTO[]> {
    return await this.leadSourceTypesService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<LeadSourceTypesDTO[]> {
    return await this.leadSourceTypesService.getAllByStatus(status);
  }

  @Get('/by-language/:language')
  public async getByLanguage(
    @Param('language') language: string,
  ): Promise<LeadSourceTypesDTO[]> {
    return await this.leadSourceTypesService.getByLanguage(language);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<LeadSourceTypesDTO> {
    return await this.leadSourceTypesService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: LeadSourceTypesDTO,
  ): Promise<LeadSourceTypesDTO> {
    return await this.leadSourceTypesService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: LeadSourceTypesDTO,
  ): Promise<LeadSourceTypesDTO> {
    return await this.leadSourceTypesService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<LeadSourceTypesDTO> {
    return await this.leadSourceTypesService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.leadSourceTypesService.hardDelete(id);
  }
}

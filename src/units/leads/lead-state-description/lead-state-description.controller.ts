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
import { LeadStateDescriptionDTO } from './lead-state-description.dto';
import { LeadStateDescriptionService } from './lead-state-description.service';

@Controller('lead-state-description')
@ApiTags('Lead State Description Endpoints')
@UseInterceptors(TransformInterceptor)
export class LeadStateDescriptionController {
  constructor(
    private readonly leadStateDescriptionService: LeadStateDescriptionService,
  ) {}

  @Get()
  public async getAll(): Promise<LeadStateDescriptionDTO[]> {
    return await this.leadStateDescriptionService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<LeadStateDescriptionDTO[]> {
    return await this.leadStateDescriptionService.getAllByStatus(status);
  }

  @Get('/by-language/:language')
  public async getByLanguage(
    @Param('language') language: string,
  ): Promise<LeadStateDescriptionDTO[]> {
    return await this.leadStateDescriptionService.getByLanguage(language);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<LeadStateDescriptionDTO> {
    return await this.leadStateDescriptionService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: LeadStateDescriptionDTO,
  ): Promise<LeadStateDescriptionDTO> {
    return await this.leadStateDescriptionService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: LeadStateDescriptionDTO,
  ): Promise<LeadStateDescriptionDTO> {
    return await this.leadStateDescriptionService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<LeadStateDescriptionDTO> {
    return await this.leadStateDescriptionService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.leadStateDescriptionService.hardDelete(id);
  }
}

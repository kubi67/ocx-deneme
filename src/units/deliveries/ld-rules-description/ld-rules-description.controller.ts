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
import { LdRulesDescriptionDTO } from './ld-rules-description.dto';
import { LdRulesDescriptionService } from './ld-rules-description.service';

@Controller('ld-rules-description')
@ApiTags('Ld Rules Description Endpoints')
@UseInterceptors(TransformInterceptor)
export class LdRulesDescriptionController {
  constructor(
    private readonly ldRulesDescriptionService: LdRulesDescriptionService,
  ) {}

  @Get()
  public async getAll(): Promise<LdRulesDescriptionDTO[]> {
    return await this.ldRulesDescriptionService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<LdRulesDescriptionDTO[]> {
    return await this.ldRulesDescriptionService.getAllByStatus(status);
  }

  @Get('/by-lang/:lang')
  public async getByModelID(
    @Param('lang') lang: string,
  ): Promise<LdRulesDescriptionDTO[]> {
    return await this.ldRulesDescriptionService.getByLang(lang);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<LdRulesDescriptionDTO> {
    return await this.ldRulesDescriptionService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: LdRulesDescriptionDTO,
  ): Promise<LdRulesDescriptionDTO> {
    return await this.ldRulesDescriptionService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: LdRulesDescriptionDTO,
  ): Promise<LdRulesDescriptionDTO> {
    return await this.ldRulesDescriptionService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<LdRulesDescriptionDTO> {
    return await this.ldRulesDescriptionService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.ldRulesDescriptionService.hardDelete(id);
  }
}

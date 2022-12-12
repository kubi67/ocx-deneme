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
import { LeadStatesDTO } from './lead-states.dto';
import { LeadStatesService } from './lead-states.service';

@Controller('lead-states')
@ApiTags('Lead States Endpoints')
@UseInterceptors(TransformInterceptor)
export class LeadStatesController {
  constructor(private readonly leadStateService: LeadStatesService) {}

  @Get()
  public async getAll(): Promise<LeadStatesDTO[]> {
    return await this.leadStateService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<LeadStatesDTO[]> {
    return await this.leadStateService.getAllByStatus(status);
  }

  // @Get('/by-language/:language')
  // public async getByLanguage(
  //   @Param('language') language: string,
  // ): Promise<LeadStatesDTO[]> {
  //   return await this.leadStateService.getByLanguage(language);
  // }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<LeadStatesDTO> {
    return await this.leadStateService.getById(id);
  }

  @Post()
  public async create(@Body() dto: LeadStatesDTO): Promise<LeadStatesDTO> {
    return await this.leadStateService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: LeadStatesDTO,
  ): Promise<LeadStatesDTO> {
    return await this.leadStateService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<LeadStatesDTO> {
    return await this.leadStateService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.leadStateService.hardDelete(id);
  }
}

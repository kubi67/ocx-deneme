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
import { LdRulesDTO } from './ld-rules.dto';
import { LdRulesService } from './ld-rules.service';

@Controller('ld-rules')
@ApiTags('Ld Rules Endpoints')
@UseInterceptors(TransformInterceptor)
export class LdRulesController {
  constructor(private readonly ldRulesService: LdRulesService) {}

  @Get()
  public async getAll(): Promise<LdRulesDTO[]> {
    return await this.ldRulesService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<LdRulesDTO[]> {
    return await this.ldRulesService.getAllByStatus(status);
  }

  @Get('/by-name/:name')
  public async getByModelID(
    @Param('name') name: string,
  ): Promise<LdRulesDTO[]> {
    return await this.ldRulesService.getByName(name);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<LdRulesDTO> {
    return await this.ldRulesService.getById(id);
  }

  @Post()
  public async create(@Body() dto: LdRulesDTO): Promise<LdRulesDTO> {
    return await this.ldRulesService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: LdRulesDTO,
  ): Promise<LdRulesDTO> {
    return await this.ldRulesService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<LdRulesDTO> {
    return await this.ldRulesService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.ldRulesService.hardDelete(id);
  }
}

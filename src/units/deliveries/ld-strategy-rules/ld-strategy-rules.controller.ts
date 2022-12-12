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
import { LdStrategyRulesDTO } from './ld-strategy-rules.dto';
import { LdStrategyRulesService } from './ld-strategy-rules.service';

@Controller('ld-strategy-rules')
@ApiTags('Ld Strategy Rules Endpoints')
@UseInterceptors(TransformInterceptor)
export class LdStrategyRulesController {
  constructor(
    private readonly ldStrategyRulesService: LdStrategyRulesService,
  ) {}

  @Get()
  public async getAll(): Promise<LdStrategyRulesDTO[]> {
    return await this.ldStrategyRulesService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<LdStrategyRulesDTO[]> {
    return await this.ldStrategyRulesService.getAllByStatus(status);
  }

  @Get('/by-ld-strategy/:strategy')
  public async getByLdStrategy(
    @Param('strategy') strategy: string,
  ): Promise<LdStrategyRulesDTO[]> {
    return await this.ldStrategyRulesService.getByLdStrategy(strategy);
  }

  @Get('/by-ld-rule/:rule')
  public async getByLdRule(
    @Param('rule') rule: string,
  ): Promise<LdStrategyRulesDTO[]> {
    return await this.ldStrategyRulesService.getByLdRule(rule);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<LdStrategyRulesDTO> {
    return await this.ldStrategyRulesService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: LdStrategyRulesDTO,
  ): Promise<LdStrategyRulesDTO> {
    return await this.ldStrategyRulesService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: LdStrategyRulesDTO,
  ): Promise<LdStrategyRulesDTO> {
    return await this.ldStrategyRulesService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<LdStrategyRulesDTO> {
    return await this.ldStrategyRulesService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.ldStrategyRulesService.hardDelete(id);
  }
}

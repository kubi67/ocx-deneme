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
import { LeadPoolDTO } from './leadpools.dto';
import { LeadpoolsService } from './leadpools.service';

@Controller('lead-pool')
@ApiTags('Lead Pools Endpoints')
@UseInterceptors(TransformInterceptor)
export class LeadPoolsController {
  constructor(private readonly leadPoolService: LeadpoolsService) {}

  @Get()
  public async getAll(): Promise<LeadPoolDTO[]> {
    return await this.leadPoolService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<LeadPoolDTO[]> {
    return await this.leadPoolService.getAllByStatus(status);
  }

  @Get('/by-broker/:broker')
  public async getAllByBroker(
    @Param('broker') broker: string,
  ): Promise<LeadPoolDTO[]> {
    return await this.leadPoolService.getByBroker(broker);
  }

  @Get('/by-assigned-user/:assigned')
  public async getAllByAssigned(
    @Param('assigned') assigned: string,
  ): Promise<LeadPoolDTO[]> {
    return await this.leadPoolService.getByAssignedUser(assigned);
  }

  @Get('/by-preference/:preference')
  public async getByPreference(
    @Param('preference') preference: string,
  ): Promise<LeadPoolDTO[]> {
    return await this.leadPoolService.getByPreferenceUser(preference);
  }

  @Get('/by-source-type/:source-type')
  public async getBySourceType(
    @Param('source-type') sourceType: string,
  ): Promise<LeadPoolDTO[]> {
    return await this.leadPoolService.getBySourceType(sourceType);
  }

  @Get('/by-source-id/:source-id')
  public async getBySourceID(
    @Param('source-id') sourceID: string,
  ): Promise<LeadPoolDTO[]> {
    return await this.leadPoolService.getBySourceID(sourceID);
  }

  @Get('/by-state/:state')
  public async getByState(
    @Param('state') state: number,
  ): Promise<LeadPoolDTO[]> {
    return await this.leadPoolService.getByState(state);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<LeadPoolDTO> {
    return await this.leadPoolService.getById(id);
  }

  @Post()
  public async create(@Body() dto: LeadPoolDTO): Promise<LeadPoolDTO> {
    return await this.leadPoolService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: LeadPoolDTO,
  ): Promise<LeadPoolDTO> {
    return await this.leadPoolService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<LeadPoolDTO> {
    return await this.leadPoolService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.leadPoolService.hardDelete(id);
  }
}

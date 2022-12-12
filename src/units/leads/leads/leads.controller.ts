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
import { RolesService } from 'src/units/roles/roles/roles.service';
import { RoleUserService } from 'src/units/user/role_user/role_user.service';
import { UsersService } from 'src/units/user/user/user.service';
import { LeadDTO } from './leads.dto';
import { LeadsService } from './leads.service';

@Controller('leads')
@ApiTags('Leads Endpoints')
@UseInterceptors(TransformInterceptor)
export class LeadsController {
  constructor(private readonly leadService: LeadsService) {}

  @Get()
  public async getAll(): Promise<LeadDTO[]> {
    return await this.leadService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<LeadDTO[]> {
    return await this.leadService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<LeadDTO> {
    return await this.leadService.getById(id);
  }

  @Get('/full-leads/:status')
  public async getLeadsFull() {
    return await this.leadService.getAllWithAll();
  }

  @Get('/get-delivered/:data')
  public async getDelivered(): Promise<any> {
    return await this.leadService.getDeliveredLeads();
  }

  @Get('/delivered-by-operator/:operator')
  public async getDeliveredByOperator(
    @Param('operator') operator: string,
  ): Promise<LeadDTO[]> {
    return await this.leadService.getDeliveredLeadsByOperator(operator);
  }

  @Get('/get-delivered-full/:data')
  public async getDeliveredFull(): Promise<any> {
    return await this.leadService.getDeliveredLeadsFull();
  }

  @Get('/delivered-full-by-operator/:operator')
  public async getDeliveredFullByOperator(
    @Param('operator') operator: string,
  ): Promise<LeadDTO[]> {
    return await this.leadService.getDeliveredLeadsFullByOperator(operator);
  }

  @Get('/get-by-campaign/:campaign')
  public async getByCampaign(
    @Param('campaign') campaign: string,
  ): Promise<LeadDTO[]> {
    return await this.leadService.getByCampaign(campaign);
  }

  @Get('/get-by-delivery/:delivery')
  public async getByDelivery(
    @Param('delivery') delivery: boolean,
  ): Promise<LeadDTO[]> {
    return await this.leadService.getByDelivered(delivery);
  }

  @Get('/get-by-operator/:operator')
  public async getByOperator(
    @Param('operator') operator: string,
  ): Promise<LeadDTO[]> {
    return await this.leadService.getLeadsByOperator(operator);
  }

  @Get('/get-by-assigned/:assigned')
  public async getByAssignedUser(
    @Param('assigned') assigned: string,
  ): Promise<LeadDTO[]> {
    return await this.leadService.getByAssignedUser(assigned);
  }

  @Get('/get-by-broker/:broker')
  public async getByBroker(
    @Param('broker') broker: string,
  ): Promise<LeadDTO[]> {
    return await this.leadService.getByBroker(broker);
  }

  @Get('/get-by-state/:state')
  public async getByState(@Param('state') state: number): Promise<LeadDTO[]> {
    return await this.leadService.getByState(state);
  }

  @Post()
  public async create(@Body() dto: LeadDTO): Promise<LeadDTO> {
    return await this.leadService.create(dto);
  }

  @Post('/manuel/:id')
  public async createByQuery(
    @Body() dto: LeadDTO,
    @Param('id') id: string,
  ): Promise<LeadDTO> {
    return await this.leadService.createSimpleManuel(dto, id);
  }

  @Post('/manuel-many/:id')
  public async createByQueryMultiple(
    @Body() dto: LeadDTO,
    @Param('id') id: string,
    @Param('count') count: number,
  ): Promise<LeadDTO> {
    return await this.leadService.createSimpleMany(dto, id, count);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: LeadDTO,
  ): Promise<LeadDTO> {
    return await this.leadService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<LeadDTO> {
    return await this.leadService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.leadService.hardDelete(id);
  }
}

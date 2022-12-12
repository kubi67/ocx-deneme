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
import { CcCallsDTO } from './cc-calls.dto';
import { CcCallsService } from './cc-calls.service';

  
  @Controller('cc-calls')
  @ApiTags('Cc Calls Endpoints')
  @UseInterceptors(TransformInterceptor) 
  export class CcCallsController {
    constructor(private readonly ccCallsService:CcCallsService) {}
  
    @Get()
    public async getAll(): Promise<CcCallsDTO[]> {
      return await this.ccCallsService.getAll();
    }
  
    @Get('/by-status/:id')
    public async getAllByStatus(
      @Param('status') status: boolean,
    ): Promise<CcCallsDTO[]> {
      return await this.ccCallsService.getAllByStatus(status);
    }
  
    @Get('/by-cid/:cid')
    public async getByCid(
      @Param('cid') cid: string,
    ): Promise<CcCallsDTO[]> {
      return await this.ccCallsService.getByCid(cid);
    }
  
    @Get('/by-duid/:duid')
    public async getByDuid(
      @Param('duid') duid: string,
    ): Promise<CcCallsDTO[]> {
      return await this.ccCallsService.getByDuid(duid);
    }
  
   
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<CcCallsDTO> {
      return await this.ccCallsService.getById(id);
    }
  
    @Post()
    public async create(@Body() dto: CcCallsDTO): Promise<CcCallsDTO> {
      return await this.ccCallsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: CcCallsDTO,
    ): Promise<CcCallsDTO> {
      return await this.ccCallsService.update(id, dto);
    }
  
    @Delete(':id')
    public async softDelete(@Param('id') id: string): Promise<CcCallsDTO> {
      return await this.ccCallsService.softDelete(id);
    }
  
    @Delete('/hard/:id')
    public async hardDelete(@Param('id') id: string): Promise<any> {
      return await this.ccCallsService.hardDelete(id);
    }
  }
  
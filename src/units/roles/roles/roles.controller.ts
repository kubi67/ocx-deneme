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
import { RolesDTO } from './roles.dto';
import { RolesService } from './roles.service';

@Controller('roles')
@ApiTags('Roles Endpoints')
@UseInterceptors(TransformInterceptor)
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  public async getAll(): Promise<RolesDTO[]> {
    return await this.rolesService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<RolesDTO[]> {
    return await this.rolesService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<RolesDTO> {
    return await this.rolesService.getById(id);
  }

  @Post()
  public async create(@Body() dto: RolesDTO): Promise<RolesDTO> {
    return await this.rolesService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: RolesDTO,
  ): Promise<RolesDTO> {
    return await this.rolesService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<RolesDTO> {
    return await this.rolesService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.rolesService.hardDelete(id);
  }
}

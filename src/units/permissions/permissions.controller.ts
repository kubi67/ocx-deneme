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
import { PermissionDTO } from './permissions.dto';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
@ApiTags('Permissions Endpoints')
@UseInterceptors(TransformInterceptor)
export class PermissionsController {
  constructor(private readonly permissionService: PermissionsService) {}

  @Get()
  public async getAll(): Promise<PermissionDTO[]> {
    return await this.permissionService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<PermissionDTO[]> {
    return await this.permissionService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<PermissionDTO> {
    return await this.permissionService.getById(id);
  }

  @Post()
  public async create(@Body() dto: PermissionDTO): Promise<PermissionDTO> {
    return await this.permissionService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: PermissionDTO,
  ): Promise<PermissionDTO> {
    return await this.permissionService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<PermissionDTO> {
    return await this.permissionService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.permissionService.hardDelete(id);
  }
}

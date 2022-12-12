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
import { RolesPermissionsDTO } from './roles_permissions.dto';
import { RolePermissionsService } from './roles_permissions.service';

@Controller('roles-permissions')
@ApiTags('Roles and Permissions Endpoints')
@UseInterceptors(TransformInterceptor)
export class RolesPermissionsController {
  constructor(
    private readonly rolePermissionsService: RolePermissionsService,
  ) {}

  @Get()
  public async getAll(): Promise<RolesPermissionsDTO[]> {
    return await this.rolePermissionsService.getAll();
  }

  @Get()
  public async getByPerm(@Param('id') id: string): Promise<any> {
    return await this.rolePermissionsService.getPermsByRole(id);
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<RolesPermissionsDTO[]> {
    return await this.rolePermissionsService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<RolesPermissionsDTO> {
    return await this.rolePermissionsService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: RolesPermissionsDTO,
  ): Promise<RolesPermissionsDTO> {
    return await this.rolePermissionsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: RolesPermissionsDTO,
  ): Promise<RolesPermissionsDTO> {
    return await this.rolePermissionsService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<RolesPermissionsDTO> {
    return await this.rolePermissionsService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.rolePermissionsService.hardDelete(id);
  }
}

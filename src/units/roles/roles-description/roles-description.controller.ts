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
import { RolesDescriptionDTO } from './roles-description.dto';
import { RolesDescriptionService } from './roles-description.service';

@Controller('roles-description')
@ApiTags('Roles Description Endpoints')
@UseInterceptors(TransformInterceptor)
export class RolesDescriptionController {
  constructor(
    private readonly rolesDescriptionService: RolesDescriptionService,
  ) {}

  @Get()
  public async getAll(): Promise<RolesDescriptionDTO[]> {
    return await this.rolesDescriptionService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<RolesDescriptionDTO[]> {
    return await this.rolesDescriptionService.getAllByStatus(status);
  }

  @Get('/language/:id')
  public async getByLang(
    @Param('id') id: string,
  ): Promise<RolesDescriptionDTO[]> {
    return await this.rolesDescriptionService.getByLang(id);
  }

  @Get('/by-role/:id')
  public async getByRole(
    @Param('role') role: string,
  ): Promise<RolesDescriptionDTO[]> {
    return await this.rolesDescriptionService.getByRole(role);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<RolesDescriptionDTO> {
    return await this.rolesDescriptionService.getById(id);
  }

  @Post()
  public async create(
    @Body() dto: RolesDescriptionDTO,
  ): Promise<RolesDescriptionDTO> {
    return await this.rolesDescriptionService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: RolesDescriptionDTO,
  ): Promise<RolesDescriptionDTO> {
    return await this.rolesDescriptionService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(
    @Param('id') id: string,
  ): Promise<RolesDescriptionDTO> {
    return await this.rolesDescriptionService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.rolesDescriptionService.hardDelete(id);
  }
}

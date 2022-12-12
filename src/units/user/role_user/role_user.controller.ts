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
import { RoleUserDTO } from './role_user.dto';
import { RoleUserService } from './role_user.service';

@Controller('user-roles')
@ApiTags('User Roles Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserRolesController {
  constructor(private readonly roleUserService: RoleUserService) {}

  @Get()
  public async getAll(): Promise<RoleUserDTO[]> {
    return await this.roleUserService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<RoleUserDTO[]> {
    return await this.roleUserService.getAllByStatus(status);
  }

  @Get('/get-by-user/:id')
  public async getByUser(@Param('id') id: string): Promise<RoleUserDTO> {
    return await this.roleUserService.getByUser(id);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<RoleUserDTO> {
    return await this.roleUserService.getById(id);
  }

  @Post()
  public async create(@Body() dto: RoleUserDTO): Promise<RoleUserDTO> {
    return await this.roleUserService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: RoleUserDTO,
  ): Promise<RoleUserDTO> {
    return await this.roleUserService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<RoleUserDTO> {
    return await this.roleUserService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.roleUserService.hardDelete(id);
  }
}

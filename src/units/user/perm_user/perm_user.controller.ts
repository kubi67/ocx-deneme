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
import { PermUserDTO } from './perm_user.dto';
import { PermUserService } from './perm_user.service';

@Controller('user-perm')
@ApiTags('User Perms Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserPermController {
  constructor(private readonly permUserService: PermUserService) {}

  @Get()
  public async getAll(): Promise<PermUserDTO[]> {
    return await this.permUserService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<PermUserDTO[]> {
    return await this.permUserService.getAllByStatus(status);
  }

  @Get('/get-by-user/:id')
  public async getByUser(@Param('id') id: string): Promise<PermUserDTO[]> {
    return await this.permUserService.getByUser(id);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<PermUserDTO> {
    return await this.permUserService.getById(id);
  }

  @Post()
  public async create(@Body() dto: PermUserDTO): Promise<PermUserDTO> {
    return await this.permUserService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: PermUserDTO,
  ): Promise<PermUserDTO> {
    return await this.permUserService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<PermUserDTO> {
    return await this.permUserService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.permUserService.hardDelete(id);
  }
}

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
import { TeamUserDTO } from './team_user.dto';
import { TeamUserService } from './team_user.service';

@Controller('team-user')
@ApiTags('Team User Endpoints')
@UseInterceptors(TransformInterceptor)
export class TeamUserController {
  constructor(private readonly teamUserService: TeamUserService) {}

  @Get()
  public async getAll(): Promise<TeamUserDTO[]> {
    return await this.teamUserService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<TeamUserDTO[]> {
    return await this.teamUserService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<TeamUserDTO> {
    return await this.teamUserService.getById(id);
  }

  @Post()
  public async create(@Body() dto: TeamUserDTO): Promise<TeamUserDTO> {
    return await this.teamUserService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: TeamUserDTO,
  ): Promise<TeamUserDTO> {
    return await this.teamUserService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<TeamUserDTO> {
    return await this.teamUserService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.teamUserService.hardDelete(id);
  }
}

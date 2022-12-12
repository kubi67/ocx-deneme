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
import { UserLoginDTO } from './user_login.dto';
import { UserLoginService } from './user_login.service';

@Controller('user-login')
@ApiTags('User Login Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Get()
  public async getAll(): Promise<UserLoginDTO[]> {
    return await this.userLoginService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<UserLoginDTO[]> {
    return await this.userLoginService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<UserLoginDTO> {
    return await this.userLoginService.getById(id);
  }

  @Post()
  public async create(@Body() dto: UserLoginDTO): Promise<UserLoginDTO> {
    return await this.userLoginService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UserLoginDTO,
  ): Promise<UserLoginDTO> {
    return await this.userLoginService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<UserLoginDTO> {
    return await this.userLoginService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.userLoginService.hardDelete(id);
  }
}

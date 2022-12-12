import { HttpService } from '@nestjs/axios';
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
import { UserCreateDTO } from './user-create.dto';
import { UserDTO } from './user.dto';
import { UsersService } from './user.service';

@Controller('users')
@ApiTags('User Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  public async getAll(): Promise<UserDTO[]> {
    return await this.userService.getAll();
  }

  @Get('/mock')
  public async getAllMock(): Promise<UserDTO[]> {
    return await this.userService.getAll();
  }

  @Get('/trader-user')
  public async getTraderUser(): Promise<any> {
    return await this.userService.getTraderUser();
  }

  @Get('/get-operators/:data')
  public async getOperators(): Promise<UserDTO[]> {
    return await this.userService.getOperators();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<UserDTO[]> {
    return await this.userService.getAllByStatus(status);
  }

  @Get('/by-verified/:verified')
  public async getAllByVerified(
    @Param('verified') verified: boolean,
  ): Promise<UserDTO[]> {
    return await this.userService.getByVerified(verified);
  }

  @Get('/by-approved/:approved')
  public async getAllByApproved(
    @Param('approved') approved: boolean,
  ): Promise<UserDTO[]> {
    return await this.userService.getByApproved(approved);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<UserDTO> {
    return await this.userService.getById(id);
  }

  @Post()
  public async create(@Body() dto: UserCreateDTO): Promise<UserDTO> {
    return await this.userService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UserDTO,
  ): Promise<UserDTO> {
    return await this.userService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<UserDTO> {
    return await this.userService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.userService.hardDelete(id);
  }
}

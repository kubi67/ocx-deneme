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
import { UserAdressDTO } from './user_adress.dto';
import { UserAdressService } from './user_adress.service';

@Controller('user-adress')
@ApiTags('User Adress Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserAdressController {
  constructor(private readonly userAdressService: UserAdressService) {}

  @Get()
  public async getAll(): Promise<UserAdressDTO[]> {
    return await this.userAdressService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<UserAdressDTO[]> {
    return await this.userAdressService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<UserAdressDTO> {
    return await this.userAdressService.getById(id);
  }

  @Post()
  public async create(@Body() dto: UserAdressDTO): Promise<UserAdressDTO> {
    return await this.userAdressService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UserAdressDTO,
  ): Promise<UserAdressDTO> {
    return await this.userAdressService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<UserAdressDTO> {
    return await this.userAdressService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.userAdressService.hardDelete(id);
  }
}

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
import { UserContactDTO } from './user_contact.dto';
import { UserContactService } from './user_contact.service';

@Controller('user-contact')
@ApiTags('User Contact Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserContactController {
  constructor(private readonly userContactService: UserContactService) {}

  @Get()
  public async getAll(): Promise<UserContactDTO[]> {
    return await this.userContactService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<UserContactDTO[]> {
    return await this.userContactService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<UserContactDTO> {
    return await this.userContactService.getById(id);
  }

  @Post()
  public async create(@Body() dto: UserContactDTO): Promise<UserContactDTO> {
    return await this.userContactService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UserContactDTO,
  ): Promise<UserContactDTO> {
    return await this.userContactService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<UserContactDTO> {
    return await this.userContactService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.userContactService.hardDelete(id);
  }
}

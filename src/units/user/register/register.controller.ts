import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { RegisterUsersDTO } from './register.dto';
import { RegisterService } from './register.service';

@Controller('register')
@ApiTags('Register Endpoints')
@UseInterceptors(TransformInterceptor)
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('/')
  public async create(
    @Body() dto: RegisterUsersDTO,
  ): Promise<RegisterUsersDTO> {
    return await this.registerService.register(dto);
  }

  @Post('/create-user/')
  public async createUser(
    @Body() dto: RegisterUsersDTO,
  ): Promise<RegisterUsersDTO> {
    return await this.registerService.register(dto);
  }
}

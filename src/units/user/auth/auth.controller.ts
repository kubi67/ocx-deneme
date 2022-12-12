import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { request } from 'http';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { LoginUsersDTO } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
@ApiTags('Auth Endpoints')
@UseInterceptors(TransformInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // TEST FOR JWT AUTH GUARD
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return 'data';
  }
  @Post()
  public async create(
    @Body() dto: LoginUsersDTO,
    @Req() request,
  ): Promise<LoginUsersDTO> {
    return await this.authService.auth(dto, request.headers, request.ip);
  }
}

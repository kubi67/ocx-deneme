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
import { UserDocumentDTO } from './user_documents.dto';
import { UserDocumentService } from './user_documents.service';

@Controller('user-documents')
@ApiTags('User Documents Endpoints')
@UseInterceptors(TransformInterceptor)
export class UserDocumentsController {
  constructor(private readonly userDocumentService: UserDocumentService) {}

  @Get()
  public async getAll(): Promise<UserDocumentDTO[]> {
    return await this.userDocumentService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<UserDocumentDTO[]> {
    return await this.userDocumentService.getAllByStatus(status);
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<UserDocumentDTO> {
    return await this.userDocumentService.getById(id);
  }

  @Post()
  public async create(@Body() dto: UserDocumentDTO): Promise<UserDocumentDTO> {
    return await this.userDocumentService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UserDocumentDTO,
  ): Promise<UserDocumentDTO> {
    return await this.userDocumentService.update(id, dto);
  }

  @Delete(':id')
  public async softDelete(@Param('id') id: string): Promise<UserDocumentDTO> {
    return await this.userDocumentService.softDelete(id);
  }

  @Delete('/hard/:id')
  public async hardDelete(@Param('id') id: string): Promise<any> {
    return await this.userDocumentService.hardDelete(id);
  }
}

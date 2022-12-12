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
import { AuditLogsDTO } from './audit-logs.dto';
import { AuditLogService } from './audit-logs.service';

@Controller('audit-logs')
@ApiTags('Audit Logs Endpoints')
@UseInterceptors(TransformInterceptor)
export class AuditLogsController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Get()
  public async getAll(): Promise<AuditLogsDTO[]> {
    return await this.auditLogService.getAll();
  }

  @Get('/by-status/:id')
  public async getAllByStatus(
    @Param('status') status: boolean,
  ): Promise<AuditLogsDTO[]> {
    return await this.auditLogService.getAllByStatus(status);
  }

  @Get('/by-user/:id')
  public async getByUser(
    @Param('id') id: string,
  ): Promise<AuditLogsDTO[]> {
    return await this.auditLogService.getByUser(id);
  }


  @Get(':id')
  public async get(@Param('id') id: string): Promise<AuditLogsDTO> {
    return await this.auditLogService.getById(id);
  }

  @Post()
  public async create(@Body() dto: AuditLogsDTO): Promise<AuditLogsDTO> {
    return await this.auditLogService.create(dto);
  }

//   @Put(':id')
//   public async update(
//     @Param('id') id: string,
//     @Body() dto: AuditLogsDTO,
//   ): Promise<AuditLogsDTO> {
//     return await this.auditLogService.update(id, dto);
//   }

//   @Delete(':id')
//   public async softDelete(@Param('id') id: string): Promise<AuditLogsDTO> {
//     return await this.auditLogService.softDelete(id);
//   }

//   @Delete('/hard/:id')
//   public async hardDelete(@Param('id') id: string): Promise<any> {
//     return await this.auditLogService.hardDelete(id);
//   }
}

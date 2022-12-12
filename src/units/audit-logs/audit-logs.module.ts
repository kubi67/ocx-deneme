import { Module } from '@nestjs/common';
import { AuditLogsController } from './audit-logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLog } from 'src/models/logs/audit_log.entity';
import { AuditLogService } from './audit-logs.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuditLog])],
  providers: [AuditLogService],
  controllers: [AuditLogsController],
  exports: [AuditLogService]
})
export class AuditLogsModule {}

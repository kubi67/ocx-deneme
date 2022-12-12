import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLogsModule } from 'src/units/audit-logs/audit-logs.module';
import { LoggerMiddleware } from './logger.service';


@Module({
  imports:[AuditLogsModule],
  providers: [LoggerMiddleware, ],
  controllers: [],
  exports: [LoggerMiddleware]
})
export class LoggerModule {}

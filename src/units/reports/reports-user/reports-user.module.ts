import { Module } from '@nestjs/common';
import { ReportsUserService } from './reports-user.service';
import { ReportsUserController } from './reports-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportUser } from 'src/models/reports/reports_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportUser])],
  providers: [ReportsUserService],
  controllers: [ReportsUserController],
})
export class ReportsUserModule {}

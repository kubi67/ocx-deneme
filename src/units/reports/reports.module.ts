import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leads } from 'src/models/leads/leads.entity';
import { LeadsModule } from '../leads/leads/leads.module';
import { UserLoginModule } from '../user/user_login/user_login.module';
import { NotesModule } from '../notes/notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Leads]),
    LeadsModule,
    UserLoginModule,
    NotesModule,
  ],
  providers: [ReportsService],
  controllers: [ReportsController],
})
export class ReportsTwiceModule {}

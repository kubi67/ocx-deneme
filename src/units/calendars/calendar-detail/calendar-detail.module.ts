import { Module } from '@nestjs/common';
import { CalendarDetailService } from './calendar-detail.service';
import { CalendarDetailController } from './calendar-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarDetail } from 'src/models/calendars/calendar-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CalendarDetail])],
  providers: [CalendarDetailService],
  controllers: [CalendarDetailController],
})
export class CalendarDetailModule {}

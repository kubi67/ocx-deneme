import { Module } from '@nestjs/common';
import { CalendarSpaceService } from './calendar-space.service';
import { CalendarSpaceController } from './calendar-space.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarSpace } from 'src/models/calendars/calendar-space.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CalendarSpace])],
  providers: [CalendarSpaceService],
  controllers: [CalendarSpaceController],
})
export class CalendarSpaceModule {}

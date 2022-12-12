import { Module } from '@nestjs/common';
import { UserPerformanceService } from './user_performance.service';
import { UserPerformanceController } from './user_performance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPerformance } from 'src/models/users/user_performance.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserPerformance])],
  providers: [UserPerformanceService],
  controllers: [UserPerformanceController]
})
export class UserPerformanceModule {}

import { Module } from '@nestjs/common';
import { CcCallsService } from './cc-calls.service';
import { CcCallsController } from './cc-calls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CcCalls } from 'src/models/ccs/cc_calls.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CcCalls])],
  providers: [CcCallsService],
  controllers: [CcCallsController]
})
export class CcCallsModule {}

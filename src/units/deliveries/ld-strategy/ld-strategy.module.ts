import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdStrategy } from 'src/models/deliveries/ld_strategy.entity';
import { LdStrategyController } from './ld-strategy.controller';
import { LdStrategyService } from './ld-strategy.service';

@Module({
  imports:[TypeOrmModule.forFeature([LdStrategy])],
  controllers: [LdStrategyController],
  providers: [LdStrategyService]
})
export class LdStrategyModule {}

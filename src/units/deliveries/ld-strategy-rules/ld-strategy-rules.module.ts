import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdStrategyRules } from 'src/models/deliveries/ld_strategy_rules.entity';
import { LdStrategyRulesController } from './ld-strategy-rules.controller';
import { LdStrategyRulesService } from './ld-strategy-rules.service';

@Module({
  imports:[TypeOrmModule.forFeature([LdStrategyRules])],
  controllers: [LdStrategyRulesController],
  providers: [LdStrategyRulesService]
})
export class LdStrategyRulesModule {}

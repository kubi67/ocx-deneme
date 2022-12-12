import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdRules } from 'src/models/deliveries/ld_rules.entity';
import { LdRulesController } from './ld-rules.controller';
import { LdRulesService } from './ld-rules.service';

@Module({
  imports: [TypeOrmModule.forFeature([LdRules]),],
  controllers: [LdRulesController],
  providers: [LdRulesService]
})
export class LdRulesModule {}

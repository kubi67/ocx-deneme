import { Module } from '@nestjs/common';
import { LdRulesDescriptionService } from './ld-rules-description.service';
import { LdRulesDescriptionController } from './ld-rules-description.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LdRulesDescription } from 'src/models/deliveries/ld_rules_description.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LdRulesDescription])],
  providers: [LdRulesDescriptionService],
  controllers: [LdRulesDescriptionController]
})
export class LdRulesDescriptionModule {}

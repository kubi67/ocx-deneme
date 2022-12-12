import { Module } from '@nestjs/common';
import { BrokerAffiliateService } from './broker_affiliate.service';
import { BrokerAffiliateController } from './broker_affiliate.controller';
import { BrokerAffiliate } from 'src/models/brokers/broker_affiliate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([BrokerAffiliate])],
  providers: [BrokerAffiliateService],
  controllers: [BrokerAffiliateController],
  exports: [BrokerAffiliateService],
})
export class BrokerAffiliateModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brokers } from 'src/models/brokers/brokers.entity';
import { BrokerUser } from 'src/models/brokers/broker_user.entity';
import { UserModule } from 'src/units/user/user/user.module';
import { BrokerUserModule } from '../broker_user/broker_user.module';
import { BrokerController } from './brokers.controller';
import { BrokersService } from './brokers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Brokers, BrokerUser]),
    UserModule,
    BrokerUserModule,
  ],
  providers: [BrokersService],
  controllers: [BrokerController],
  exports: [BrokersService],
})
export class BrokerModule {}

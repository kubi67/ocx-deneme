import { Module } from '@nestjs/common';
import { BrokerUserService } from './broker_user.service';
import { BrokerUserController } from './broker_user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrokerUser } from 'src/models/brokers/broker_user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BrokerUser])],
  providers: [BrokerUserService],
  controllers: [BrokerUserController],
  exports: [BrokerUserService]
})
export class BrokerUserModule {}

import { Module } from '@nestjs/common';
import { MessageDeliveryService } from './message_delivery.service';
import { MessageDeliveryController } from './message_delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageDelivery } from 'src/models/messages/message_delivery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageDelivery])],
  providers: [MessageDeliveryService],
  controllers: [MessageDeliveryController]
})
export class MessageDeliveryModule {}

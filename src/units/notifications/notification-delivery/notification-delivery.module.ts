import { Module } from '@nestjs/common';
import { NotificationDeliveryService } from './notification-delivery.service';
import { NotificationDeliveryController } from './notification-delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationDelivery } from 'src/models/notifications/notification_delivery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationDelivery])],
  providers: [NotificationDeliveryService],
  controllers: [NotificationDeliveryController],
})
export class NotificationDeliveryModule {}

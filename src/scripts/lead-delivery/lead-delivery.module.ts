import { Module } from '@nestjs/common';
import { LeadDeliveryService } from './lead-delivery.service';

@Module({
  providers: [LeadDeliveryService]
})
export class LeadDeliveryModule {}

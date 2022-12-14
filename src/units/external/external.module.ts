import { Module } from '@nestjs/common';
import { ExternalService } from './external.service';
import { ExternalController } from './external.controller';

@Module({
  providers: [ExternalService],
  controllers: [ExternalController]
})
export class ExternalModule {}

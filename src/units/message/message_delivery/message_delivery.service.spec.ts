import { Test, TestingModule } from '@nestjs/testing';
import { MessageDeliveryService } from './message_delivery.service';

describe('MessageDeliveryService', () => {
  let service: MessageDeliveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageDeliveryService],
    }).compile();

    service = module.get<MessageDeliveryService>(MessageDeliveryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

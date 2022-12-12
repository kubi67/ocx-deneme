import { Test, TestingModule } from '@nestjs/testing';
import { LeadDeliveryService } from './lead-delivery.service';

describe('LeadDeliveryService', () => {
  let service: LeadDeliveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadDeliveryService],
    }).compile();

    service = module.get<LeadDeliveryService>(LeadDeliveryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

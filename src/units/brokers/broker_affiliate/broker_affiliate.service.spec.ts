import { Test, TestingModule } from '@nestjs/testing';
import { BrokerAffiliateService } from './broker_affiliate.service';

describe('BrokerAffiliateService', () => {
  let service: BrokerAffiliateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrokerAffiliateService],
    }).compile();

    service = module.get<BrokerAffiliateService>(BrokerAffiliateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

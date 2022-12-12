import { Test, TestingModule } from '@nestjs/testing';
import { BrokerAffiliateController } from './broker_affiliate.controller';

describe('BrokerAffiliateController', () => {
  let controller: BrokerAffiliateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrokerAffiliateController],
    }).compile();

    controller = module.get<BrokerAffiliateController>(BrokerAffiliateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

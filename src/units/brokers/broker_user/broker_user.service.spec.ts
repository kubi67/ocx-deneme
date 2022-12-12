import { Test, TestingModule } from '@nestjs/testing';
import { BrokerUserService } from './broker_user.service';

describe('BrokerUserService', () => {
  let service: BrokerUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrokerUserService],
    }).compile();

    service = module.get<BrokerUserService>(BrokerUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

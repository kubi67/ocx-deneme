import { Test, TestingModule } from '@nestjs/testing';
import { LdStrategyService } from './ld-strategy.service';

describe('LdStrategyService', () => {
  let service: LdStrategyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LdStrategyService],
    }).compile();

    service = module.get<LdStrategyService>(LdStrategyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

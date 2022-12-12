import { Test, TestingModule } from '@nestjs/testing';
import { LdStrategyRulesService } from './ld-strategy-rules.service';

describe('LdStrategyRulesService', () => {
  let service: LdStrategyRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LdStrategyRulesService],
    }).compile();

    service = module.get<LdStrategyRulesService>(LdStrategyRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

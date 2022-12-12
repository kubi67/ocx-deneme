import { Test, TestingModule } from '@nestjs/testing';
import { LdRulesService } from './ld-rules.service';

describe('LdRulesService', () => {
  let service: LdRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LdRulesService],
    }).compile();

    service = module.get<LdRulesService>(LdRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

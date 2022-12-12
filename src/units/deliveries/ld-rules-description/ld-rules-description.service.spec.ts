import { Test, TestingModule } from '@nestjs/testing';
import { LdRulesDescriptionService } from './ld-rules-description.service';

describe('LdRulesDescriptionService', () => {
  let service: LdRulesDescriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LdRulesDescriptionService],
    }).compile();

    service = module.get<LdRulesDescriptionService>(LdRulesDescriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

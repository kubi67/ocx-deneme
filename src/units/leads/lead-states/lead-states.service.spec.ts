import { Test, TestingModule } from '@nestjs/testing';
import { LeadStatesService } from './lead-states.service';

describe('LeadStatesService', () => {
  let service: LeadStatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadStatesService],
    }).compile();

    service = module.get<LeadStatesService>(LeadStatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

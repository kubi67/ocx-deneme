import { Test, TestingModule } from '@nestjs/testing';
import { LeadStateDescriptionService } from './lead-state-description.service';

describe('LeadStateDescriptionService', () => {
  let service: LeadStateDescriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadStateDescriptionService],
    }).compile();

    service = module.get<LeadStateDescriptionService>(LeadStateDescriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

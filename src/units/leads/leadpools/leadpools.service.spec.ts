import { Test, TestingModule } from '@nestjs/testing';
import { LeadpoolsService } from './leadpools.service';

describe('LeadpoolsService', () => {
  let service: LeadpoolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadpoolsService],
    }).compile();

    service = module.get<LeadpoolsService>(LeadpoolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

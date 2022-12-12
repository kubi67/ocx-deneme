import { Test, TestingModule } from '@nestjs/testing';
import { LeadSourceTypesService } from './lead-source-types.service';

describe('LeadSourceTypesService', () => {
  let service: LeadSourceTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadSourceTypesService],
    }).compile();

    service = module.get<LeadSourceTypesService>(LeadSourceTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

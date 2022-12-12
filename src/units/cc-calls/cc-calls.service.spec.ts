import { Test, TestingModule } from '@nestjs/testing';
import { CcCallsService } from './cc-calls.service';

describe('CcCallsService', () => {
  let service: CcCallsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CcCallsService],
    }).compile();

    service = module.get<CcCallsService>(CcCallsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

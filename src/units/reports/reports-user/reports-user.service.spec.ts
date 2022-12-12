import { Test, TestingModule } from '@nestjs/testing';
import { ReportsUserService } from './reports-user.service';

describe('ReportsUserService', () => {
  let service: ReportsUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportsUserService],
    }).compile();

    service = module.get<ReportsUserService>(ReportsUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UserPerformanceService } from './user_performance.service';

describe('UserPerformanceService', () => {
  let service: UserPerformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPerformanceService],
    }).compile();

    service = module.get<UserPerformanceService>(UserPerformanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

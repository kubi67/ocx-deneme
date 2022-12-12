import { Test, TestingModule } from '@nestjs/testing';
import { CalendarDetailService } from './calendar-detail.service';

describe('CalendarDetailService', () => {
  let service: CalendarDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarDetailService],
    }).compile();

    service = module.get<CalendarDetailService>(CalendarDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

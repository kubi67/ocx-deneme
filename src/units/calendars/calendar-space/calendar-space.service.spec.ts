import { Test, TestingModule } from '@nestjs/testing';
import { CalendarSpaceService } from './calendar-space.service';

describe('CalendarSpaceService', () => {
  let service: CalendarSpaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarSpaceService],
    }).compile();

    service = module.get<CalendarSpaceService>(CalendarSpaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CalendarSpaceController } from './calendar-space.controller';

describe('CalendarSpaceController', () => {
  let controller: CalendarSpaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarSpaceController],
    }).compile();

    controller = module.get<CalendarSpaceController>(CalendarSpaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

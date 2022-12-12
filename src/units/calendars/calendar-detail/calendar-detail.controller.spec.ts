import { Test, TestingModule } from '@nestjs/testing';
import { CalendarDetailController } from './calendar-detail.controller';

describe('CalendarDetailController', () => {
  let controller: CalendarDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarDetailController],
    }).compile();

    controller = module.get<CalendarDetailController>(CalendarDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

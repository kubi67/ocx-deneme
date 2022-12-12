import { Test, TestingModule } from '@nestjs/testing';
import { UserPerformanceController } from './user_performance.controller';

describe('UserPerformanceController', () => {
  let controller: UserPerformanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPerformanceController],
    }).compile();

    controller = module.get<UserPerformanceController>(UserPerformanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

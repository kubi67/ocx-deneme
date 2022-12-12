import { Test, TestingModule } from '@nestjs/testing';
import { ReportsUserController } from './reports-user.controller';

describe('ReportsUserController', () => {
  let controller: ReportsUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsUserController],
    }).compile();

    controller = module.get<ReportsUserController>(ReportsUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

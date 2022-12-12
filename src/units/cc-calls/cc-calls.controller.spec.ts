import { Test, TestingModule } from '@nestjs/testing';
import { CcCallsController } from './cc-calls.controller';

describe('CcCallsController', () => {
  let controller: CcCallsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CcCallsController],
    }).compile();

    controller = module.get<CcCallsController>(CcCallsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LdStrategyController } from './ld-strategy.controller';

describe('LdStrategyController', () => {
  let controller: LdStrategyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LdStrategyController],
    }).compile();

    controller = module.get<LdStrategyController>(LdStrategyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

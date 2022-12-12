import { Test, TestingModule } from '@nestjs/testing';
import { LdStrategyRulesController } from './ld-strategy-rules.controller';

describe('LdStrategyRulesController', () => {
  let controller: LdStrategyRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LdStrategyRulesController],
    }).compile();

    controller = module.get<LdStrategyRulesController>(LdStrategyRulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

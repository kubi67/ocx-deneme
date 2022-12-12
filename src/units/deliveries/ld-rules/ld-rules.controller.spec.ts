import { Test, TestingModule } from '@nestjs/testing';
import { LdRulesController } from './ld-rules.controller';

describe('LdRulesController', () => {
  let controller: LdRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LdRulesController],
    }).compile();

    controller = module.get<LdRulesController>(LdRulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

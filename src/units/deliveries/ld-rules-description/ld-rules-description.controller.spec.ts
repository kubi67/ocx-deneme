import { Test, TestingModule } from '@nestjs/testing';
import { LdRulesDescriptionController } from './ld-rules-description.controller';

describe('LdRulesDescriptionController', () => {
  let controller: LdRulesDescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LdRulesDescriptionController],
    }).compile();

    controller = module.get<LdRulesDescriptionController>(LdRulesDescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LeadStatesController } from './lead-states.controller';

describe('LeadStatesController', () => {
  let controller: LeadStatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadStatesController],
    }).compile();

    controller = module.get<LeadStatesController>(LeadStatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LeadStateDescriptionController } from './lead-state-description.controller';

describe('LeadStateDescriptionController', () => {
  let controller: LeadStateDescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadStateDescriptionController],
    }).compile();

    controller = module.get<LeadStateDescriptionController>(LeadStateDescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

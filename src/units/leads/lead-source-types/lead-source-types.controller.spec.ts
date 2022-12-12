import { Test, TestingModule } from '@nestjs/testing';
import { LeadSourceTypesController } from './lead-source-types.controller';

describe('LeadSourceTypesController', () => {
  let controller: LeadSourceTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadSourceTypesController],
    }).compile();

    controller = module.get<LeadSourceTypesController>(LeadSourceTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

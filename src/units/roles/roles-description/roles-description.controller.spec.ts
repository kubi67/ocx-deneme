import { Test, TestingModule } from '@nestjs/testing';
import { RolesDescriptionController } from './roles-description.controller';

describe('RolesDescriptionController', () => {
  let controller: RolesDescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesDescriptionController],
    }).compile();

    controller = module.get<RolesDescriptionController>(RolesDescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

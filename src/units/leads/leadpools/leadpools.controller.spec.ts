import { Test, TestingModule } from '@nestjs/testing';
import { LeadpoolsController } from './leadpools.controller';

describe('LeadpoolsController', () => {
  let controller: LeadpoolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadpoolsController],
    }).compile();

    controller = module.get<LeadpoolsController>(LeadpoolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

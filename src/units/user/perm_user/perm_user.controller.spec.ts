import { Test, TestingModule } from '@nestjs/testing';
import { PermUserController } from './perm_user.controller';

describe('PermUserController', () => {
  let controller: PermUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermUserController],
    }).compile();

    controller = module.get<PermUserController>(PermUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

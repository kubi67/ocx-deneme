import { Test, TestingModule } from '@nestjs/testing';
import { UserAdressController } from './user_adress.controller';

describe('UserAdressController', () => {
  let controller: UserAdressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAdressController],
    }).compile();

    controller = module.get<UserAdressController>(UserAdressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

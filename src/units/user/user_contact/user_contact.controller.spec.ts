import { Test, TestingModule } from '@nestjs/testing';
import { UserContactController } from './user_contact.controller';

describe('UserContactController', () => {
  let controller: UserContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserContactController],
    }).compile();

    controller = module.get<UserContactController>(UserContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

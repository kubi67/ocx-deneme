import { Test, TestingModule } from '@nestjs/testing';
import { BrokerUserController } from './broker_user.controller';

describe('BrokerUserController', () => {
  let controller: BrokerUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrokerUserController],
    }).compile();

    controller = module.get<BrokerUserController>(BrokerUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

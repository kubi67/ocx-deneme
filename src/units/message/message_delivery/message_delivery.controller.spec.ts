import { Test, TestingModule } from '@nestjs/testing';
import { MessageDeliveryController } from './message_delivery.controller';

describe('MessageDeliveryController', () => {
  let controller: MessageDeliveryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageDeliveryController],
    }).compile();

    controller = module.get<MessageDeliveryController>(MessageDeliveryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

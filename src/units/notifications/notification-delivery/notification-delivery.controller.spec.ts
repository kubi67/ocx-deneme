import { Test, TestingModule } from '@nestjs/testing';
import { NotificationDeliveryController } from './notification-delivery.controller';

describe('NotificationDeliveryController', () => {
  let controller: NotificationDeliveryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationDeliveryController],
    }).compile();

    controller = module.get<NotificationDeliveryController>(NotificationDeliveryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

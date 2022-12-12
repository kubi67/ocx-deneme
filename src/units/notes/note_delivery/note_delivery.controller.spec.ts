import { Test, TestingModule } from '@nestjs/testing';
import { NoteDeliveryController } from './note_delivery.controller';

describe('NoteDeliveryController', () => {
  let controller: NoteDeliveryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteDeliveryController],
    }).compile();

    controller = module.get<NoteDeliveryController>(NoteDeliveryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NoteDeliveryService } from './note_delivery.service';

describe('NoteDeliveryService', () => {
  let service: NoteDeliveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteDeliveryService],
    }).compile();

    service = module.get<NoteDeliveryService>(NoteDeliveryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

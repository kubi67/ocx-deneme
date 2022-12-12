import { Test, TestingModule } from '@nestjs/testing';
import { RolesDescriptionService } from './roles-description.service';

describe('RolesDescriptionService', () => {
  let service: RolesDescriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesDescriptionService],
    }).compile();

    service = module.get<RolesDescriptionService>(RolesDescriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

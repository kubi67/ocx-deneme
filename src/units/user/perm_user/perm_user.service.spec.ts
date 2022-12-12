import { Test, TestingModule } from '@nestjs/testing';
import { PermUserService } from './perm_user.service';

describe('PermUserService', () => {
  let service: PermUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermUserService],
    }).compile();

    service = module.get<PermUserService>(PermUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

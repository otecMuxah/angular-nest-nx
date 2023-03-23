import { Test, TestingModule } from '@nestjs/testing';
import { AlbumService } from './album.service';
import { PrismaService } from '@test-repo-na/api/core/services/shared-services';

describe('AlbumService', () => {
  let service: AlbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumService, PrismaService],
    }).compile();

    service = module.get<AlbumService>(AlbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

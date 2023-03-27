import { Test, TestingModule } from '@nestjs/testing';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { PrismaService } from '@test-repo-na/api/core/services/shared-services';
import { PhotosService } from '@test-repo-na/api/resource/photo';

describe('AlbumController', () => {
  let controller: AlbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlbumController],
      providers: [AlbumService, PrismaService, PhotosService],
    }).compile();

    controller = module.get<AlbumController>(AlbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

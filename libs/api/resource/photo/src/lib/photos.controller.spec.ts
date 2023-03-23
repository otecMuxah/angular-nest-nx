import { Test, TestingModule } from '@nestjs/testing';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { Photo } from '@test-repo-na/models';

describe('PhotosController', () => {
  // let controller: PhotosController;
  //
  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [PhotosController],
  //   }).compile();
  //
  //   controller = module.get<PhotosController>(PhotosController);
  // });
  //
  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
  let controller: PhotosController;
  let photosService: PhotosService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PhotosController],
      providers: [
        {
          provide: PhotosService,
          useValue: {
            photosByAlbumId: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<PhotosController>(PhotosController);
    photosService = moduleRef.get<PhotosService>(PhotosService);
  });

  describe('getAlbumByAlbumId', () => {
    it('should return photos for the specified album', async () => {
      const mockPhotos = [
        { id: 1, title: 'Photo 1' } as Photo,
        { id: 2, title: 'Photo 2' } as Photo,
      ];
      const photosServiceSpy = jest
        .spyOn(photosService, 'photosByAlbumId')
        .mockResolvedValue(mockPhotos);

      const albumId = '1';
      const page = '0';
      const pageSize = '10';

      const result = await controller.getAlbumByAlbumId(
        albumId,
        page,
        pageSize
      );

      expect(result).toEqual(mockPhotos);
      expect(photosServiceSpy).toHaveBeenCalledWith(1, { skip: 0, take: 10 });
    });
  });
});

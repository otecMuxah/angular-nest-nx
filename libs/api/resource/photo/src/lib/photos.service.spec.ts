import { Test } from '@nestjs/testing';
import { PhotosService } from './photos.service';
import { PhotoModel } from '@test-repo-na/models';
import { PrismaService } from '@test-repo-na/api/core/services/shared-services';

describe('PhotosService', () => {
  let photosService: PhotosService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PhotosService,
        {
          provide: PrismaService,
          useValue: {
            photos: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    photosService = moduleRef.get<PhotosService>(PhotosService);
    prismaService = moduleRef.get<PrismaService>(PrismaService);
  });

  describe('photosByAlbumId', () => {
    it('should return photos for the specified album ID', async () => {
      const mockPhotos = [
        { id: 1, title: 'Photo 1' } as PhotoModel,
        { id: 2, title: 'Photo 2' } as PhotoModel,
      ];
      const prismaClientSpy = jest
        .spyOn(prismaService.photos, 'findMany')
        .mockResolvedValue(mockPhotos);

      const albumId = 1;
      const params = { skip: 0, take: 10 };

      const result = await photosService.photosByAlbumId(albumId, params);

      expect(result).toEqual(mockPhotos);
      expect(prismaClientSpy).toHaveBeenCalledWith({
        where: { albumId: albumId },
        skip: params.skip,
        take: params.take,
      });
    });
  });
});

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Photo } from './entity/photo.entity';
import { PrismaService } from '@test-repo-na/api/core/services/shared-services';

@Injectable()
export class PhotosService {
  constructor(private prisma: PrismaService) {}

  async photo(
    photosWhereUniqueInput: Prisma.photosWhereUniqueInput
  ): Promise<Photo | null> {
    return this.prisma.photos.findUnique({
      where: photosWhereUniqueInput,
    });
  }

  async photosByAlbumId(
    albumId: number,
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.photosWhereUniqueInput;
      where?: Prisma.photosWhereInput;
      orderBy?: Prisma.photosOrderByWithRelationInput;
    }
  ): Promise<Photo[] | null> {
    const { skip, take } = params;

    return this.prisma.photos.findMany({
      where: { albumId: albumId },
      skip,
      take,
    });
  }

  async photos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.photosWhereUniqueInput;
    where?: Prisma.photosWhereInput;
    orderBy?: Prisma.photosOrderByWithRelationInput;
  }): Promise<Photo[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.photos.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}

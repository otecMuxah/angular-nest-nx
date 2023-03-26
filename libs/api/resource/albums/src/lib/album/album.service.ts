import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Prisma } from '@prisma/client';
import { Album } from './entities/album.entity';
import { PrismaService } from '@test-repo-na/api/core/services/shared-services';

@Injectable()
export class AlbumService {
  constructor(private prisma: PrismaService) {}

  async create(createAlbumDto: CreateAlbumDto) {
    const { title, userId } = createAlbumDto;
    return this.prisma.albums.create({
      data: {
        title,
        users: {
          connect: { id: Number(userId) },
        },
      },
    });
  }

  async findOne(
    userWhereUniqueInput: Prisma.albumsWhereUniqueInput
  ): Promise<Album | null> {
    return this.prisma.albums.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.albumsWhereUniqueInput;
    where?: Prisma.albumsWhereInput;
    orderBy?: Prisma.albumsOrderByWithRelationInput;
  }): Promise<Album[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.albums.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}

import { Module } from '@nestjs/common';
import { AlbumController } from './album/album.controller';
import { AlbumService } from './album/album.service';
import { PrismaService } from '@test-repo-na/api/core/services/shared-services';
import { PhotosService } from '@test-repo-na/api/resource/photo';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService, PrismaService, PhotosService],
  exports: [AlbumService],
})
export class ApiResourceAlbumsModule {}

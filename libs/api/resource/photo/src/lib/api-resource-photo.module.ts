import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { PrismaService } from '@test-repo-na/api/core/services/shared-services';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService, PrismaService],
  exports: [],
})
export class ApiResourcePhotoModule {}

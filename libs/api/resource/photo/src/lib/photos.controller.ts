import { Controller, Get, Param, Query } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photo } from './entity/photo.entity';

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Get('album/:id')
  getAlbumByAlbumId(
    @Param('id') id: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string
  ): Promise<Photo[]> {
    const skip = Number(page) * Number(pageSize);

    return this.photosService.photosByAlbumId(
      Number(id),
      pageSize
        ? {
            skip: Number(skip),
            take: Number(pageSize),
          }
        : {}
    );
  }

  @Get('')
  getAllPhotos(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string
  ): Promise<Photo[]> {
    const skip = Number(page) * Number(pageSize);

    return this.photosService.photos(
      pageSize
        ? {
            skip: Number(skip),
            take: Number(pageSize),
          }
        : {}
    );
  }
}

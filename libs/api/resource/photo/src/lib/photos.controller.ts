import { Controller, Get, Param } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photo } from './entity/photo.entity';

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}
  @Get('album/:id')
  getAlbumByAlbumId(@Param('id') id: string): Promise<Photo[]> {
    return this.photosService.photosByAlbumId(Number(id));
  }
}

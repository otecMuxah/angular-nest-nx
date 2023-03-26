import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { Album } from './entities/album.entity';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PhotosService } from '@test-repo-na/api/resource/photo';
import { CreatePhotoDto } from '@test-repo-na/api/resource/photo';

@Controller('album')
export class AlbumController {
  constructor(
    private readonly albumService: AlbumService,
    private photoService: PhotosService
  ) {}

  @ApiOkResponse({
    description: 'Album record created',
    type: Album,
  })
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'files' }], {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    })
  )
  async create(
    @Body() createAlbumDto: CreateAlbumDto,
    @UploadedFiles() files: { files: Array<Express.Multer.File> }
  ) {
    const album = await this.albumService.create(createAlbumDto);
    const photos = files.files.map((file) => {
      return {
        url: `${process.env.HOST_URL}uploads/${file.filename}`,
        thumbnailUrl: `${process.env.HOST_URL}uploads/${file.filename}`,
        albumId: album.id,
      } as CreatePhotoDto;
    });

    return this.photoService.create(photos);
  }

  @ApiOkResponse({
    description: 'Album records',
    type: Album,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.albumService.findAll({});
  }

  @ApiOkResponse({
    description: 'Album records',
    type: Album,
    isArray: true,
  })
  @Get('paginated')
  findAllPaginated(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string
  ) {
    const skip = Number(page) * Number(pageSize);

    return this.albumService.findAll(
      skip && pageSize
        ? {
            skip: Number(skip),
            take: Number(pageSize),
          }
        : {}
    );
  }

  @ApiOkResponse({
    description: 'Single Album record',
    type: Album,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const album = await this.albumService.findOne({ id: Number(id) });

    if (!album) {
      throw new NotFoundException(`Album with ${id} does not exist.`);
    }
    return album;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    return this.albumService.update(+id, updateAlbumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albumService.remove(+id);
  }
}

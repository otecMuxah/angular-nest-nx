import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { Album } from './entities/album.entity';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @ApiOkResponse({
    description: 'Album record created',
    type: Album,
  })
  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumService.create(createAlbumDto);
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
  findOne(@Param('id') id: string) {
    return this.albumService.findOne({ id: Number(id) });
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

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AlbumModel } from '@test-repo-na/models';

export class CreateAlbumDto implements Omit<AlbumModel, 'id'> {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: number;
}

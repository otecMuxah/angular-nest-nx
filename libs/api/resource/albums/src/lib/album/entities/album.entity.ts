import { ApiProperty } from '@nestjs/swagger';
import { AlbumModel } from '@test-repo-na/models';

export class Album implements AlbumModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  userId: number;
}

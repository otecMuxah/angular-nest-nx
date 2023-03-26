import { ApiProperty } from '@nestjs/swagger';
import { PhotoModel } from '@test-repo-na/models';

export class Photo implements PhotoModel {
  @ApiProperty()
  albumId: number | null;

  @ApiProperty()
  id: number;

  @ApiProperty()
  thumbnailUrl: string | null;

  @ApiProperty()
  title: string | null;

  @ApiProperty()
  url: string;
}

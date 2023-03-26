import { ApiProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  albumId: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  thumbnailUrl?: string;
}

import { photos } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Photo implements photos {
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

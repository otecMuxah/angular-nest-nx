import { ApiProperty } from '@nestjs/swagger';

export class CreateAlbumDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  userId: number;
}

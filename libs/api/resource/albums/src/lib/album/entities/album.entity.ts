import { albums } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Album implements albums {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  userId: number;
}

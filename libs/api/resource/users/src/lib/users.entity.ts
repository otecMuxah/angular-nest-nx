import { Prisma, users } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';
import { Album } from '@test-repo-na/api/resource/albums';

export class User implements users {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
  @ApiProperty() username: string;
  @ApiProperty() email: string;
  @ApiProperty() address: Prisma.JsonValue | null;
  @ApiProperty() phone: string | null;
  @ApiProperty() website: string | null;
  @ApiProperty() company: Prisma.JsonValue | null;
  @ApiProperty() albums?: Album[];
}

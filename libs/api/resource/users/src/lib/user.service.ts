import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@test-repo-na/api/core/services/shared-services';
import { User } from './users.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.usersWhereUniqueInput
  ): Promise<User | null> {
    return this.prisma.users.findUnique({
      where: userWhereUniqueInput,
      include: {
        albums: true,
      },
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.usersWhereUniqueInput;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}

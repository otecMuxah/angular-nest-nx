import {Injectable} from '@nestjs/common';
import {Prisma} from '@prisma/client';
import {PrismaService} from "@test-repo-na/api/core/services/shared-services";
import {Users} from "./users.entity";



@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {
  }



  async user(
    userWhereUniqueInput: Prisma.usersWhereUniqueInput,
  ): Promise<Users[] | null> {
    return this.prisma.users.findMany({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.usersWhereUniqueInput;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput;
  }): Promise<Users[]> {
    const {skip, take, cursor, where, orderBy} = params;
    return this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}

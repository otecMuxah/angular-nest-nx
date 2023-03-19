import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersController } from './users.controller';
import { PrismaService } from '@test-repo-na/api/core/services/shared-services';

@Module({
  controllers: [UsersController],
  providers: [UserService, PrismaService],
  exports: [],
})
export class ApiResourceUsersModule {}

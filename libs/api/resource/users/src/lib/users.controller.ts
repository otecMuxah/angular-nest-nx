import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './users.entity';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  @ApiOkResponse({
    description: 'List of user records',
    type: User,
    isArray: true,
  })
  @Get()
  getAllUsers(@Param() params): Promise<User[]> {
    return this.userService.users({});
  }

  @ApiOkResponse({
    description: 'Single user record',
    type: User,
  })
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    const user = await this.userService.user({ id: Number(id) });

    if (!user) {
      throw new NotFoundException(`User with ${id} does not exist.`);
    }

    return user;
  }
}

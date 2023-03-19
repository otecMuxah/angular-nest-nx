import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUsers(@Param() params): Promise<Users[]> {
    return this.userService.users({});
  }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<Users[]> {
    return this.userService.user({ id: Number(id) });
  }
}

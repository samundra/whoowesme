import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }
  @Get()
  async findAll(): Promise<string> {
    const users = await this.userService.findAll();
    console.log({ users });
    return 'This is all users';
  }
}

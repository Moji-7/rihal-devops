import { Controller, UseGuards, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { User } from './user.entity';
import { AuthGuard } from '../guards/AuthGuard';
import { IUserLikes } from './userLikes.interface';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  // needed bu authentication appp micro service!
  @MessagePattern({ role: 'user', cmd: 'get' })
  getUser(data: any): Promise<User> {
    return this.userService.findOne(data.username);
  }

  @UseGuards(AuthGuard)
  @Get('greet')
  async greet(): Promise<IUserLikes[]> {
    return await this.userService.likes(1);
  }


  //@UseGuards(AuthGuard)
  @Post('create')
  async create(@Body() user:User){
    return this.userService.createUser(user);

  }
}

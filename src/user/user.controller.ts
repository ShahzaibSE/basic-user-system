import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './../auth/local-auth.guard';
// Service.
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  //
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  // @Post('test')
  // async test(@Body() req) {
  //   return req;
  // }
}

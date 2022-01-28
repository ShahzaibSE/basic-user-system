import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './../auth/local-auth.guard';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
//
import { AuthService } from './../auth/auth.service';
import { UserService } from 'src/user/user.service';

@Controller('grid')
export class GridController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  //
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
    // return req;
  }
  //
  @UseGuards(JwtAuthGuard)
  @Post('profile')
  async profile(@Request() req) {
    return req.user;
  }
}

import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './../auth/local-auth.guard';
// Service.
import { UserService } from './user.service';
import { AuthService } from './../auth/auth.service';

@Controller('user')
export class UserController {}

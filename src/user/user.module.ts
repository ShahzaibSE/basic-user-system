import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://shahzaibnoor:zx112233445566@cluster0.wpuzy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}

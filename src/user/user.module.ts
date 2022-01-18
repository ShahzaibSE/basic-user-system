import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://shahzaibnoor:zx112233445566@cluster0.vhrvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
})
export class UserModule {}

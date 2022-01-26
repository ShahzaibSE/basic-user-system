import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GridModule } from './grid/grid.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://shahzaibnoor:zx112233445566@cluster0.hz0mu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    GridModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

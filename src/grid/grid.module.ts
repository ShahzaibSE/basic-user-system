import { Module } from '@nestjs/common';
import { GridController } from './grid.controller';
//
import { UserModule } from './../user/user.module';
import { AuthModule } from './../auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [GridController],
})
export class GridModule {}

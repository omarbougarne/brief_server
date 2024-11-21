import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [ AuthController, UsersController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {}
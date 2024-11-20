import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
  MongooseModule.forRoot(process.env.MONGO_URI),
  UsersModule, AuthModule],
  controllers: [ AuthController, UsersController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {}

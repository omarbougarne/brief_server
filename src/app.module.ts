import { Module } from '@nestjs/common';
import { AppController } from './app.contoller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RoomsModule } from './rooms/rooms.module';
import { PlaylistModule } from './playlist/playlist.module';
import { VideosModule } from './videos/videos.module';
import { MailerModule } from './mailer/mailer.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    
    UsersModule,
    AuthModule,
    RoomsModule,
    PlaylistModule,
    VideosModule,
    MailerModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
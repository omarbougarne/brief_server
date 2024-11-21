import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schema/user.schema';
import { Room, RoomSchema } from './schema/rooms.schema';
import { Playlist, playlistSchema } from 'src/playlist/schema/playlist.schema';
import { Video, VideoSchema } from 'src/videos/schema/video.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Room.name, schema: RoomSchema }, 
      { name: User.name, schema: UserSchema }, 
      {name: Playlist.name, schema: playlistSchema},
      { name: Video.name, schema: VideoSchema }
    ]),
  ],
  controllers: [RoomsController],
  providers: [RoomsService]
})
export class RoomsModule {}

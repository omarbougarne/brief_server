import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Playlist, playlistSchema } from './schema/playlist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Playlist.name, schema: playlistSchema }
    ]),
  ],
  controllers: [PlaylistController],
  providers: [PlaylistService]
})
export class PlaylistModule {}

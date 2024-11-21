import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schema/user.schema';
import { Room, RoomSchema } from './schema/rooms.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Room.name, schema: RoomSchema }, 
      { name: User.name, schema: UserSchema }, 
    ]),
  ],
  controllers: [RoomsController],
  providers: [RoomsService]
})
export class RoomsModule {}

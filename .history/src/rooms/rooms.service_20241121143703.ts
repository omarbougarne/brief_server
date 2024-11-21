import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Models } from 'mongoose';
import { Room } from './schema/rooms.schema';
import { User } from 'src/users/schema/user.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { Playlist } from 'src/playlist/schema/playlist.schema';

@Injectable()
export class RoomsService {
    constructor(
        @InjectModel(Room.name) private roomModel: Model<Room>,
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Playlist.name) private playlistModel: Model<Playlist>
    ){}

    async createRoom(createRoomDto: CreateRoomDto): Promise<Room>{
        const {roomName, creator, playlist} = createRoomDto
        const userId = createRoomDto.creator;
        const user = await this.userModel.findById(creator).exec()
        const playlistObj = await this.playlistModel.findById(playlist).exec()
        const room =  new this.roomModel({
            roomName,
            creator: user._id,
            playlist: playlistObj._id,
        })
        const list =  new this.playlistModel({
            playlistName: playlistObj.playlistName,
            video: []
        })
        await list.save()

        const populateRoom  = await this.roomModel.findById(room._id).populate('playlist').exec();
        await populateRoom.save()
        return populateRoom;
    }
}
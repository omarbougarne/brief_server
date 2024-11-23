import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Models } from 'mongoose';
import { Room } from './schema/rooms.schema';
import { User } from 'src/users/schema/user.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { Playlist } from 'src/playlist/schema/playlist.schema';
import { CreatePlaylistDto } from 'src/playlist/dto/createPlaylist.dto';

@Injectable()
export class RoomsService {
    constructor(
        @InjectModel(Room.name) private roomModel: Model<Room>,
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Playlist.name) private playlistModel: Model<Playlist>
    ){}

    async createRoom(createRoomDto: CreateRoomDto, createPlaylistDto: CreatePlaylistDto): Promise<Room>{
        const {roomName, creator} = createRoomDto
        const userId = createRoomDto.creator;
        
        const user = await this.userModel.findById(userId).exec()
        console.log(userId)
        

        const users = await this.userModel.find()

        const playlistName = `Play list name is ${roomName}`
        const playlist = new this.playlistModel({
            playlistName,
            video:  [],
        })
        await playlist.save();

        const room = new this.roomModel({
            roomName,
            creator: user._id,
            playlist: playlist._id,
            participants: users

        })
        await room.save();
       
        

        const populateRoom  = await this.roomModel.findById(room._id).populate('playlist').exec();
        
        await populateRoom.save()
        return populateRoom;
    }
}

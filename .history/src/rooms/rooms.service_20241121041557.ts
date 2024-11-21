import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './schema/rooms.schema';
import { User } from 'src/users/schema/user.schema';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {
    constructor(
        @InjectModel(Room.name) private roomModel: Model<Room>,
        @InjectModel(User.name) private userModel: Model<User>
    ){}

    async createRoom(createRoomDto: CreateRoomDto): Promise<Room>{
        const {roomName, creator} = createRoomDto
        const user = await this.userModel.findById(createRoomDto.creator).exec()
        const room = await new this.roomModel({
            roomName,
            user: creator
        })
        await room.save()
        return room
    }
}

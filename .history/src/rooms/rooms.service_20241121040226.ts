import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './schema/rooms.schema';
import { User } from 'src/users/schema/user.schema';

@Injectable()
export class RoomsService {
    constructor(
        @InjectModel(Room.name) private roomModel: Model<Room>,
        @InjectModel(User.name) private userModel: Model<User>
    ){}
}

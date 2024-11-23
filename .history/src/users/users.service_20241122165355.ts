import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async fetchUsers(userDto: UserDto): Promise<User[]>{

        const users = await this.userModel.find()
        return users
    }

}

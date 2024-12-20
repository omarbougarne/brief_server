import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name)
         private UserModel: Model<User> 
        ){}
}

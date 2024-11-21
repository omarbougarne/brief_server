import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs'
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name)
         private UserModel: Model<User> 
        ){}

        async  createUser(registerDto: RegisterDto): Promise<User>{
            const {name, displayname, password, email} = registerDto

            const hash = await bcrypt.hash(password, 10)

            const user = await new this.UserModel({
                name,
                displayname,
                email,
                password: hash
            })
           await user.save()
            return user
        }

        async signUser(loginDto: LoginDto): Promise<User>{
            const {email, password} = loginDto;
            const user = await this.UserModel.findOne({email})
            if(!email){
                throw new UnauthorizedException ('invalid email')
            }

            const isPasswordMatched = await bcrypt.compare(password, user.password)
            if(!isPasswordMatched){
                throw new UnauthorizedException ('invalid password')
            }
            return user
            
        }
}

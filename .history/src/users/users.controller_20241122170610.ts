import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    // constructor( private userService: UsersService){}
    // @Get('/')
    // getUsers(){
    //     return this.userService.fetchUsers();
    // }

}

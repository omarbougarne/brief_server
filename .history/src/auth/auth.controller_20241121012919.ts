import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}

    @Post('/user')
    register(@Body registerDto: RegisterDto){
        return this.authService.createUser(registerDto)
    }
    
}

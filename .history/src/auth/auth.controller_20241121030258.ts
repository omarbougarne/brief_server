import { Body, Controller, Post, Get } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}

    @Post('/register')
    register(@Body() registerDto: RegisterDto){
        return this.authService.createUser(registerDto)
    }

    @Get('login')
    login(@Body()loginDto: LoginDto)
    {
        return this.authService.signUser(loginDto)
    
    }
}

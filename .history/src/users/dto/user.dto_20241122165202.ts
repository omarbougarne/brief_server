import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserDto{

    @IsNotEmpty()
    @IsString()
    name: string;


    @IsOptional()
    displayName: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
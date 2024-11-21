import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterDto{
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsOptional()
    displayname: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string
}
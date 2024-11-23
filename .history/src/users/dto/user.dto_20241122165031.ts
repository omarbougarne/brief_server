import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    displayName: string;
}
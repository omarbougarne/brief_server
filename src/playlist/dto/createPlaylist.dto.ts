import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePlaylistDto{
    @IsNotEmpty()
    @IsString()
    playlistName: string;
    
    @IsOptional()
    video: string[];
}
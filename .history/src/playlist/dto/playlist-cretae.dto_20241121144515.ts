import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class PlaylistDto{
    @IsNotEmpty()
    @IsString()
    playlistName: string;
    
    @IsOptional()
    video: string[];
}
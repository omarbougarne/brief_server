import { IsOptional } from "class-validator";

export class PlaylistDto{

    @IsOptional()
    video: string[];
}
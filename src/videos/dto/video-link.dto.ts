import { IsNotEmpty, IsString } from "class-validator";

export class VideoLinkDto{

    @IsNotEmpty()
    @IsString()
    url: string
}
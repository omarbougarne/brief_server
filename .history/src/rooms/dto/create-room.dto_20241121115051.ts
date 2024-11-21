import { IsMongoId, IsOptional, IsString } from "class-validator";

export class CreateRoomDto{

    @IsString()
    roomName: string;

    @IsMongoId()
    creator: string;

    @IsMongoId()
    playlist: string;

    // @IsOptional()
    // participant: string[]
}
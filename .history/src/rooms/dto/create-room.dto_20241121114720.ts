import { IsMongoId, IsOptional, IsString } from "class-validator";

export class CreateRoomDto{

    @IsString()
    roomName: string;

    @IsMongoId()
    creator: string;

    // @IsOptional()
    // participant: string[]
}
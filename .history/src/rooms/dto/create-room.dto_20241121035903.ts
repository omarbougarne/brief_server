import { IsMongoId, IsString } from "class-validator";

export class CreateRoomDto{

    @IsString()
    roomNAme: string;

    @IsMongoId()
    creator: string;
}
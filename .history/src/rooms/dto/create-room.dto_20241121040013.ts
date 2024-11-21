import { IsMongoId, IsOptional, IsString } from "class-validator";

export class CreateRoomDto{

    @IsString()
    roomNAme: string;

    @IsMongoId()
    
    creator: string;

    @IsOptional()
    participant: string[]
}
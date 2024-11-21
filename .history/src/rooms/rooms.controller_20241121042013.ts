import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
    constructor(private roomService: RoomsService){}
    @Post('room')
    roomCreation(@Body() createRoomDto: CreateRoomDto){
        return this.roomService.createRoom(createRoomDto)
    }
}

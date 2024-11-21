import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('rooms')
export class RoomsController {

    @Post('room')
    roomCreation(@Body() createRoomDto: CreateRoomDto){
        return this.roomService.createRoom(createRoomDto)
    }
}

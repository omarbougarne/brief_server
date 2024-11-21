import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsService } from './rooms.service';
import { CreatePlaylistDto } from 'src/playlist/dto/createPlaylist.dto';

@Controller('rooms')
export class RoomsController {
    constructor(private roomService: RoomsService){}
    @Post('room')
    roomCreation(@Body() createRoomDto: CreateRoomDto, createPlaylist: CreatePlaylistDto){
        return this.roomService.createRoom(createRoomDto, createPlaylist)
    }
}

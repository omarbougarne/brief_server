import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Models } from 'mongoose';
import { Room } from './schema/rooms.schema';
import { User } from 'src/users/schema/user.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { Playlist } from 'src/playlist/schema/playlist.schema';
import { CreatePlaylistDto } from 'src/playlist/dto/createPlaylist.dto';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class RoomsService {
    constructor(
        @InjectModel(Room.name) private roomModel: Model<Room>,
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Playlist.name) private playlistModel: Model<Playlist>,
        private readonly mailerService: MailerService
    ){}

    async createRoom(createRoomDto: CreateRoomDto): Promise<Room>{
        const {roomName} = createRoomDto
        const userId = createRoomDto.creator;
        
        const user = await this.userModel.findById(userId).exec()
        // console.log(userId)
        
        const users = await this.userModel.find()

        const playlistName = `Play list name is ${roomName}`
        const playlist = new this.playlistModel({
            playlistName,
            video:  [],
        })
        await playlist.save();

        const room = new this.roomModel({
            roomName,
            creator: user._id,
            playlist: playlist._id,
            participants: []

        })
        await room.save();
       
        const populateRoom  = await this.roomModel.findById(room._id).populate('playlist').exec();

        const participantsEmails  = await this.userModel.find({_id: {$in: room.participants}}).select('email name').exec();

        if (!participantsEmails || participantsEmails.length === 0) {
            throw new Error('No valid participants found');
          }

          const recipients = participantsEmails.map((participant) => ({
            name: participant.name,
            address: participant.email,
          }));

        //   return await this.mailerService.sendEmail({
        //     from: { name: 'Room Admin', address: 'admin@example.com' },
        //     recipients,
        //     subject: 'Invitation to Join Room',
        //     html: `<h1>You have been invited to join the room: ${room.roomName}</h1>`,
        //   });
        
        await populateRoom.save()
        return populateRoom;
    }
}

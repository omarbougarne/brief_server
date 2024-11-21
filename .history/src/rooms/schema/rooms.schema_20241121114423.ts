import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User } from "src/users/schema/user.schema";

@Schema({timestamps: true})

export class Room{


    @Prop()
    roomName: string;

    @Prop({type: Types.ObjectId, ref: 'User', required: true})
    creator: User;

    @Prop({type: Types.ObjectId, ref: 'Playlist', required: true})
    playlist: Types.ObjectId
    
    // @Prop({type: Types.ObjectId, ref:'User'})
    // participants: string[]
}

export const RoomSchema = SchemaFactory.createForClass(Room);
export type RoomDocument = Room & Document
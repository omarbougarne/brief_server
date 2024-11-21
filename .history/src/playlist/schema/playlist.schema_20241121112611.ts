import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({timestamps: true})
export class Playlist{

    @Prop()
    name: string;
    
    @Prop({type: Types.ObjectId, required: true, ref:'Video'})
    video: Types.ObjectId;
    
}

export const playlistSchema = SchemaFactory.createForClass(Playlist)
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Video } from "src/videos/schema/video.schema";

@Schema({timestamps: true})
export class Playlist{

    @Prop()
    playlistName: string;
    
    @Prop({type: Types.ObjectId, required: true, ref:'Video'})
    video: Types.Array<Video>;
    
}

export const playlistSchema = SchemaFactory.createForClass(Playlist)
export type PlayListDocument = Playlist & Document
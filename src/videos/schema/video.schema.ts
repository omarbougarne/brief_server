import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})

export class Video{

    @Prop()
    url: string;

}

export const VideoSchema = SchemaFactory.createForClass(Video)
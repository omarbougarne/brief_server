import { Prop, Schema } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class Video{
@Prop()
url: string;

}
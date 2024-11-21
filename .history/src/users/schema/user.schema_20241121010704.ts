import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop({required: true, unique: true})
    username: string
}
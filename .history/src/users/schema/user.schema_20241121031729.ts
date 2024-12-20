import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class User{
    @Prop({required: true, unique: true})
    name: string

    @Prop({required: true})
    displayname: string

    @Prop({required: true})
    email: string

    @Prop({required: true})
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
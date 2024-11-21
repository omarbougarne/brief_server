import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop({required: true, unique: true})
    name: string
    @Prop({required: true, unique: true})
    displayname: string
    @Prop({required: true, unique: true})
    email: string
    @Prop({required: true, unique: true})
    password: string
}
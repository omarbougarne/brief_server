import { Module } from '@nestjs/common';

@Module({})
export class AuthModule {
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      ],
      controllers: [AuthController],
      providers: [AuthService]
}

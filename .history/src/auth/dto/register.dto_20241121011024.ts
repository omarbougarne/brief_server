export class RegisterDto{
    @IsString()
    @IsNotEmpty()
    name: string
}
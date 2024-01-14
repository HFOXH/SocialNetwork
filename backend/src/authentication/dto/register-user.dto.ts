import { IsString, Length } from "class-validator";

export class RegisterUserDto{
    @IsString()
    @Length(5,100)
    name: string;

    age: number;

    @IsString()
    email: string;

    password: string;
}
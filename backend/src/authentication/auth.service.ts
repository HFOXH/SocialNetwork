import { UsersService } from './../users/users.service';
import { PrismaService } from './../prisma.service';
import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';
import { Users } from 'src/users/users.model';

@Injectable()
export class AuthService{
    constructor(
        private readonly prismaService:PrismaService,
        private jwtService: JwtService,
        private readonly usersService: UsersService){}

    async login(loginDto: LoginDto): Promise<any>{
        const {email, password} = loginDto;

        const users = await this.prismaService.users.findUnique({
            where: {email}
        })

        if(!users){
            throw new NotFoundException('User not found');
        }

        const validatePassword = await bcrypt.compare(password, users.password)

        if(!validatePassword){
            throw new NotFoundException('Invalid user or password');
        }

        return {
            token: this.jwtService.sign({email}, { expiresIn: process.env.JWT_EXPIRES_IN })
        }
    }

    async register (registerUserDto: RegisterUserDto):Promise<any>{
        const createUsers = new Users()
        createUsers.name = registerUserDto.name
        createUsers.age = registerUserDto.age
        createUsers.email = registerUserDto.email
        createUsers.password = await bcrypt.hash(registerUserDto.password,10)

        const user = await this.usersService.createUser(createUsers)
        return{
            token: this.jwtService.sign({email: user.email}, { expiresIn: process.env.JWT_EXPIRES_IN })
        }
    }
}
import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-user.dto';
import { Request, Response} from 'express';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post('login')
    async login(@Req() request: Request, @Res() response: Response, @Body() loginDto: LoginDto):Promise<any>{
        try {
            const result = await this.authService.login(loginDto);
            return response.status(200).json({
                status: 'Ok!',
                message: 'Succesffully login!',
                result: result
            })
        } catch (error) {
            return response.status(500).json({
                status: 'Error!',
                message: 'Internal Server Error!',
            })
        }
    }

    @Post('register')
    async register(@Req() request: Request, @Res() response: Response, @Body() registerUserDto: RegisterUserDto): Promise<any> {
        try {
            const result = await this.authService.register(registerUserDto);
            return response.status(200).json({
                status: 'Ok!',
                message: 'Successfully register user!',
                result: result
            });
        } catch (error) {
            return response.status(500).json({
                status: 'Error!',
                message: 'Internal Server Error!',
            });
        }
    }


}
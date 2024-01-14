import { Controller, Get, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController{
    constructor(private readonly UserService: UsersService){}

    @Get('')
    async getAllUsers(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
            const result = await this.UserService.getAllUser();
            return response.status(200).json({
                status: 'Ok!',
                message: 'Successfully fetch data!',
                result: result
            })
        } catch (e) {
            return response.status(500).json({
                status: 'Ok!',
                message: 'Internal Server Error!',
                result: e
            })
        }
    }
}